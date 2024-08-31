const express =require('express');
const app = express();
const router=express.Router();
const Details=require("../models/Userinfo");

router.post('/',async (req,res)=>
{
    try{
        
        const user = await Details.find({status:"approved"});
        res.status(200).json(user);
    }
    catch(err)
    {
        console.log(err);
    }
    
})
module.exports=router;


