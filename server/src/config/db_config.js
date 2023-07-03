import mongoose from "mongoose";
import { MONGO_URL } from "./env_config.js";

export const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connection to db: success");
    } catch (error) {
        throw error;
    }
}