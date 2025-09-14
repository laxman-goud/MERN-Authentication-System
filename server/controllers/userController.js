// =======================
// controllers/userController.js
// =======================

import userModel from "../models/User.js";

// Get user profile data (without password)
export const getUserData = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ success: false, error: "User not found" });

        res.json({ success: true, userData: user });
    } catch (error) {
        console.error("Error in getUserData:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};