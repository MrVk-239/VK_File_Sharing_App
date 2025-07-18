import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
 
const DBconnection= async () => {
    const MONGODB_URL = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error.message}`);
    }
}
export default DBconnection;
