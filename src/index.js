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
console.log("Environment Variables:", process.env.MONGODB_URI);
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/index.js";
 
connectDB();