import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from "express"
import connectdb from './db/db.js'
dotenv.config({
    path:"./env"
})
connectdb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
  
})
.catch((error)=>{
    console.log("Error connecting to database: ",error);
    process.exit(1);
})
