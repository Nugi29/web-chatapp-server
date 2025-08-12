import express from 'express';
import "dotenv/config";
import http from 'http';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';

// create express app and http server
const app = express();
const server = http.createServer(app);

// middleware
app.use(express.json({ limit: '4mb' }));
app.use(cors());

// routes
app.use('/api/status', (req, res) => { res.send('Server is live'); });
app.use('/api/auth', userRouter);

// Connect to the database
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });