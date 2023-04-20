const express = require('express');
const app = express();
const mongoose = express("mongoose");
const { MongoClient } = require('mongodb')

const connectDB = require("./database")
const UserModel = require("./models/User");

const port = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/", async(req, res)=>{
    try {
        await connectDB()
        const allUsers = await UserModel.find()
        console.log(req.body.username)
        return res(200).status({"message": "Read all success", allUsers:allUsers})
    }catch(err){
        return res.status(400).json({"message": "Faetch all users failed. Reason ", err})
    }
})

app.post("/a", (req,res)=>{
    console.log(req.body)
    return res.status(200).json("Good bye")
})

/*app.post("/adduser", async(req, res)=>{
    try{
        await connectDB()
        await UserModel.create(req.body)
        return res.status(200).json({"message": "User created"})
    }
    catch(err){
        return res.status(400).json({"message":"User creat failed. Reason "+ err})
    }
})*/

app.listen(5000, ()=>{
    console.log(`Server is connected to localhost port ${port}!`)
})