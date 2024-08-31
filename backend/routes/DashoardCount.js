const express = require('express');
const router = express.Router();
const Details = require('../models/Userinfo');


router.get('/', async (req, res) => {
  try {
    const totalUsers = await Details.countDocuments();
    const rejectedUsers = await Details.countDocuments({ status: 'rejected' });
    const approvedUsers = await Details.countDocuments({ status: 'approved' });

    res.json({ totalUsers, rejectedUsers, approvedUsers });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
