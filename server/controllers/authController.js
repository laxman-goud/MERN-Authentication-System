import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required', success: false });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, { expiresIn: '7d' } );
        res.cookie('token', token, 
            { 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

        res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required', success: false });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password', success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password', success: false });
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d' } );
        res.cookie('token', token, 
            { 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });
        res.status(200).json({ message: 'Login successful' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', success: false });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie('token',
            {
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            });
        return res.status(200).json({ message: 'Logout successful', success: true });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', success: false });
    }

}