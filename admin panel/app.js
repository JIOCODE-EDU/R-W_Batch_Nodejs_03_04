import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import adminRoutes from "./routes/admin.routes";
import indexRoutes from "./routes/index.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded());
app.set("view engine" , "ejs")

app.use("/uploads" , express.static("uploads"));

// app.use("/" , require("./routes/index.routes"))

app.listen(3000 , () => {
    console.log("http://localhost:3000");
})

// database connection
// routes
// controllers
// middlewares
// utils
// models
// views
// public
// uploads
// app.js