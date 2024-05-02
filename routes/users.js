const express = require('express');
const User = require('../models/user');
const conn = require('../config/connection');
const router = express.Router();


router.post('/createUser', async (req, res) => {
    try {
        const { user } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide username, email, and password' });
        }
        const admin = false;
        const savedUser =await User.create({ user, admin });
        res.status(201).json(savedUser);

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (password != user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = router;
