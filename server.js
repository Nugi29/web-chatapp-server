import express from 'express';
import "dotenv/config";
import http  from 'http';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';
import { log } from 'console';

// create express app and http server
const app = express();
const server = http.createServer(app);

//initialize socket.io
export const io = new Server(server, {
    cors: { origin: "*" }
});

// Store Online Users
export const userSocketMap = {};

//Socket.io connection handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    log("User connected:", userId);

    if (userId) userSocketMap[userId] = socket.id;

    //emit online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected:", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

// middleware
app.use(express.json({ limit: '4mb' }));
app.use(cors());

// routes
app.use('/api/status', (req, res) => { res.send('Server is live'); });
app.use('/api/auth', userRouter);
app.use('/api/messages', messageRouter);

// Connect to the database
await connectDB();

if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
}

export default server;