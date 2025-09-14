// =======================
// server.js (entry point)
// =======================

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import connectDB from './config/mongodb.js';   // MongoDB connection
import authRouter from './routes/authRoutes.js'; // Auth routes
import userRouter from './routes/userRoutes.js'; // User routes

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

// allowed frontend origins for CORS
const allowedOrigins = [
    "http://localhost:5173",
    "https://mern-authentication-system-psi.vercel.app"
];

// CORS setup with credentials
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

// middlewares
app.use(express.json());   // parse JSON bodies
app.use(cookieParser());   // parse cookies

// base route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
