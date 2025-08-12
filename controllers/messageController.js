import User from "../models/User";
import Message from "../models/message.js";


// Get all users except the logged in user
export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id; // Get the logged in user ID
        const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password");

        // Count number of messages not seen
        const unseenMessages = {}
        const promises = filteredUsers.map(async (user) => {
            const messages = await Message.find({ senderId: user._id, receiverId: userId, seen: false })
            if (messages.length > 0) {
                unseenMessages[user._id] = messages.length;
            }
        })
        await Promise.all(promises);
        res.json({ success: true, users: filteredUsers, unseenMessages });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
