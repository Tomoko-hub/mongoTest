const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("")
        .then(()=>console.log("Mongo db connected"));
    }catch(err){
        console.log("Mongo db connection failed")
        throw new Error()
    }
}

module.exports = connectDB

//mongodb+srv://mongoTest:<password>@cluster0.xbhpgoh.mongodb.net/?retryWrites=true&w=majority
