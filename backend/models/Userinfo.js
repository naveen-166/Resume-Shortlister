const mongoose=require('mongoose')

const DetailsSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,

        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            required:true,
        },
        fileUrl:{
            type:String,
            require:true,
        },
        status:{
            type:String,
            required:true,
        },
        
    }
)
module.exports=mongoose.model('Details',DetailsSchema);