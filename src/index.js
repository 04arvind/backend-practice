/*
import mongoose from "mongoose";
import { DB_Name } from "./constants";
import express from "express";
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONDODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR:",error);
        throw error;
    }
})()

*/


// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
console.log("Environment Variables : ", process.env.MONGODB_URI);

import connectDB from "./db/index.js";
import { app } from "./app.js";
 
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Mongo db connectio failed!!",err);
})
