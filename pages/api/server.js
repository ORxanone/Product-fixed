const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
const DataUrl='mongodb+srv://asuslap503:<password>@cluster0.vnro9yz.mongodb.net/'
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
mongoose.connect(DataUrl,{
    dbName:'Classifieds',
    user:'asuslap503',
    pass:'hebibov6661234',
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Mongodb connected");
})
const ProductRoute=require("./Routes/Product.route");
const UserRoute=require("./Routes/User.route")
app.use("/products",ProductRoute)
app.use("/users",UserRoute)
app.use((req,res,next)=>{
   const err=new Error("Not found");
   err.status=404
})

app.listen(3001,()=>{
    console.log("Server basladi");
})