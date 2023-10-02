const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserScheam=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false,
    }
})
const User=mongoose.model('user',UserScheam);
module.exports=User