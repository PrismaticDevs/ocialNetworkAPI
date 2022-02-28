const { isEmail } = require('validator');
const { User } = require('../model');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async(req, res) => {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        if (!isEmail(email)) {
            req.status(401).json({ error: 'Not a valid email address' });
        }
        try {
            const newUser = await User.create({
                username,
                email,
                hashedPassword,
            });
            res.json(newUser);
        } catch (error) {
            res.json(error);
        }
    },
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    },
    getUserById: async(req, res) => {
        const { userId } = req.params;
        try {
            const user = await User.findById((userId));
            res.json(user);
        } catch (error) {
            res.json(error);
        }
    },
    updateUserById: async(req, res) => {
        const { userId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(userId, {...req.body }, { new: true });
            res.json(updatedUser);
        } catch (error) {
            res.json(error);
        }
    },
    deleteUserById: async(req, res) => {
        const { userId } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(userId);
            res.json(deletedUser);
        } catch (error) {
            res.json(error);
        }
    }
}