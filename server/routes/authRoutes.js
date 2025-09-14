// =======================
// routes/authRoutes.js
// =======================

import express from 'express';
import {
    isAuthenticated, login, logout, register,
    resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail
} from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

// Auth-related routes
authRouter.post('/register', register);                 // user registration
authRouter.post('/login', login);                       // login
authRouter.post('/logout', logout);                     // logout (clear cookie)
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp); // send OTP for email verification
authRouter.post('/verify-account', userAuth, verifyEmail);    // verify email with OTP
authRouter.get('/is-auth', userAuth, isAuthenticated);        // check authentication state
authRouter.post('/send-reset-otp', sendResetOtp);       // send OTP for password reset
authRouter.post('/reset-password', resetPassword);      // reset password with OTP

export default authRouter;
