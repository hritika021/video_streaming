import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from "express"
import connectdb from './db/db.js'
dotenv.config({
    path:"./env"
})
connectdb();
