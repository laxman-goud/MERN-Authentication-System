import { JsonWebTokenError } from "jsonwebtoken";

const userAuth = (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecoded.id) {
            req.body.userId = tokenDecoded.id;
        }
        else{
            return res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
        }
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized: Login Again', success: false });
    }
}

export default userAuth;