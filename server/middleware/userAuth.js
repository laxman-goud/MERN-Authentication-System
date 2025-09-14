// =======================
// middleware/userAuth.js
// =======================

import jwt from 'jsonwebtoken';

// Middleware to check JWT from cookies and authenticate user
const userAuth = (req, res, next) => {
    const { token } = req.cookies; // get token from cookies
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
    try {
        // verify token and attach userId to request
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
};

export default userAuth;
