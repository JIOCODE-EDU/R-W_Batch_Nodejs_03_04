import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminRoutes from "./routes/admin.routes.js";
import indexRoutes from "./routes/index.routes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("view engine" , "ejs")
app.use("/uploads" , adminRoutes);
app.use("/" , indexRoutes)

app.listen(port , () => {
    console.log(`http://localhost:${port}`);
})