import express from 'express'
import router ,  { upload } from './routes/file.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

const port = 3020

dotenv.config({
  path:"./.env"
})

// middleware

app.use(cors({
  origin:process.env.FRONTEND_URL || "*"
}))

// routes

app.get("/" , (req , res) => {
  res.send("Hello Cloudinary!")
})

app.use('/upload' , router)

app.listen(port , () => {
  console.log("server start on port 3020");
})