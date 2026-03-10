import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectdb=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongodb connected!! DB host:${connectionInstance.connection.host} \n`);
    }
    catch (error) { 
        console.log("Error connecting to database: ",error);
        process.exit(1);
    }
}
export default connectdb;