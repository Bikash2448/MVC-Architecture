import mongoose from 'mongoose';
import { MONGO_URL } from './serverConfig.js';

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL)
        console.log("Database connect succesfully")
    }
    catch(error){
        console.log('Error connecting to database');
        console.log(error);
    }
}