const express=require('express');
const bcrypt=require('bcrypt');
const app=express();
const router=express.Router();
const User = require('../models/Login');


router.post('/',async(req,res)=>{
    const {email,password}=req.body;

    try{
        const exstinguser=await User.findOne({email});
        if(exstinguser) return res.status(400).send({message:'Email already exists' , success:false});

        const hashedpassword=await bcrypt.hash(password,10);
        await User.collection.insertOne({
            email:email,
            password:hashedpassword,
            role:"user",
        });
        res.status(201).json({ success: true, message: 'Registration successful' });

    }
    catch(err)
    {
        console.log(err);
        res.status(500).send({message:'Internal Server error'});
    }
})
module.exports=router;