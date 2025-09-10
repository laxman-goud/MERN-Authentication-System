import userModel from "../models/User";

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(401).json({ error: 'User Not Found', success: false });
        }
        res.status(200).json(
            {
                success: true,
                userData: {
                    name: user.name,
                    isVerified: user.isVerified,
                }
            }
        );
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', success: false });
    }
}