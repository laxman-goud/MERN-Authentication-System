import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
};

export default userAuth;