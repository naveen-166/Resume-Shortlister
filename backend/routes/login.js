// login.js (backend)
const express = require('express');
const bcrypt = require('bcrypt');
const User = require("../models/Login");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.', success: false });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.', success: false });
        }

        return res.status(200).json({ message: 'Login success', success: true, filled: user.filled,role:user.role,email:user.email});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error", success: false });
    }
});

module.exports = router;
