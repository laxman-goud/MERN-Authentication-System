// =======================
// models/User.js
// =======================

import mongoose from "mongoose";

// Schema for user accounts
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },              // user's full name
    email: { type: String, required: true, unique: true }, // unique email
    password: { type: String, required: true },          // hashed password
    verifyOtp: { type: String, default: '' },            // OTP for email verification
    verifyOtpExpiresAt: { type: Number, default: 0 },    // OTP expiry time
    isVerified: { type: Boolean, default: false },       // email verification status
    resetOtp: { type: String, default: '' },             // OTP for password reset
    resetOtpExpiresAt: { type: Number, default: 0 },     // reset OTP expiry
    createdAt: { type: Date, default: Date.now },        // account creation date
});

// Reuse model if already compiled (for hot reloads)
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
