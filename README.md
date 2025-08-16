# Web Chat App - Backend (Server)

A robust Node.js backend server for the Web Chat App, providing real-time messaging, user authentication, and data persistence with MongoDB.

🔴 **PRIVACY WARNING**: This server handles user data for a public chat application where all user names are visible to all users. Ensure your frontend warns users NOT to use real names or personal identifying information.

## Frontend Repository

This backend serves a React frontend application. You can find the frontend repository here:
- **Frontend Repository**: https://github.com/Nugi29/web-chatapp-client.git
- **Live Frontend**: [https://web-chatapp-client.vercel.app/](https://web-chatapp-client.vercel.app/)

## Features

- ✅ RESTful API with Express.js
- ✅ Real-time messaging with Socket.io
- ✅ JWT-based authentication
- ✅ MongoDB database with Mongoose
- ✅ Password hashing with bcryptjs
- ✅ Image upload with Cloudinary
- ✅ CORS enabled for cross-origin requests
- ✅ Online/Offline user status tracking
- ✅ Message persistence and history

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **CORS** - Cross-Origin Resource Sharing

## Environment Setup

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server:
```bash
npm run server
```

For production:
```bash
npm start
```

## Available Scripts

- `npm start` - Start production server
- `npm run server` - Start development server with nodemon

## Project Structure

```
server/
├── controllers/         # Route handlers
│   ├── messageController.js
│   └── userController.js
├── middleware/         # Custom middleware
│   └── auth.js
├── models/            # Database models
│   ├── message.js
│   └── User.js
├── routes/            # API routes
│   ├── messageRoutes.js
│   └── userRoutes.js
├── lib/               # Utility functions
│   ├── cloudinary.js
│   ├── db.js
│   └── utils.js
├── vercel.json        # Vercel deployment config
└── server.js          # Main server file
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Middleware to protect sensitive endpoints
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Environment Variables**: Sensitive data stored in environment variables

## Privacy & Data Handling

⚠️ **IMPORTANT PRIVACY NOTICE**: 
- This server handles a public chat application
- All user data (except passwords) may be visible to other users
- Implement proper data validation on frontend
- Warn users against using real names or personal information
- Consider implementing additional privacy features if needed

## Database Connection

The server connects to MongoDB using Mongoose. Make sure your MongoDB instance is running and accessible with the provided `MONGO_URI`.

## Image Upload

Profile pictures are handled through Cloudinary. Configure your Cloudinary credentials in the environment variables.

## Error Handling

The server implements comprehensive error handling:
- Database connection errors
- Authentication errors
- Validation errors
- File upload errors
- Socket connection errors

## Development

1. Start MongoDB service
2. Set up environment variables
3. Install dependencies: `npm install`
4. Run development server: `npm run server`
5. The server will run on `http://localhost:5000` by default

#### Special Thanks For GreatStack Youtube Channel