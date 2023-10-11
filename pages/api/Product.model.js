const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ProductScheam=new Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false,
    },
    image:{
        type:[String]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    category:{
        type:String
    },
    model:{
        type:String
    },
    color:{
        type:String
    }
})
const Product=mongoose.model('product',ProductScheam);
module.exports=Product