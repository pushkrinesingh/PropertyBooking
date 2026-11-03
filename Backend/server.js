import express from "express"
import dotenv from "dotenv"
dotenv.config()
import ConnectDB from "./config/db.js"
import propertyRoutes from "./routes/propertyRoutes.js";

const app = express();

await ConnectDB();

app.use(express.json());
app.use("/api/properties",propertyRoutes)
const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`Server Started On Port : ${PORT}`);
});