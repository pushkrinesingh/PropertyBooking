import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Cannot Connect To Database : " , error);
    }
}

export default ConnectDB;