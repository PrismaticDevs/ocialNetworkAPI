const { isEmail } = require('validator');
const { User } = require('../model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let token;

module.exports = {
    createUser: async(req, res) => {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        try {
            if (!isEmail(email)) {
                return res.json('Not a valid email address');
            }
            if (password.length < 8) {
                return res.json("Password must be at least 8 characters")
            }
            const existingUser = await User.findOne({
                email: email
            });
            if (existingUser) {
                return res.json(email + ' already has an account');
            }
            const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
            });
            res.json(newUser.username + " successfully registered");
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
    },
    login: async(req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json('You must enter an email and a password')
        }
        try {
            const userData = await User.findOne({ email: email });
            if (!userData) {
                return res.json("Invalid login credentials");
            }
            const isMatchingPassword = await bcrypt.compare(
                password,
                userData.password
            );
            if (!isMatchingPassword) {
                return res.json("Invalid login credentials");
            }
            token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
            res.json(userData.username + " successfully logged in");
        } catch (error) {
            res.json(error);
        }
    },
    loginStatus: (req, res) => {
        return res.json(token);
    },
    logout: (req, res) => {
        token = null;
    },
}