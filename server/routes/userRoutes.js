// =======================
// routes/userRoutes.js
// =======================

import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter = express.Router();

// Protected route to fetch user data
userRouter.get('/data', userAuth, getUserData);

export default userRouter;
