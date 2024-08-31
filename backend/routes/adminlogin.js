const express = require('express');
const bcrypt = require('bcrypt');
const User = require("../models/Login"); 
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { Email, password } = req.body;
        const user = await User.findOne({ Email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials', success: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials', success: false });
        }

        const role = user.role;
        if (role !== 'admin') {
            return res.status(403).json({ message: 'You are not an admin', success: false });
        } else {
            return res.json({ message: 'Login Successful', role: user.role, success: true, email: user.email });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
