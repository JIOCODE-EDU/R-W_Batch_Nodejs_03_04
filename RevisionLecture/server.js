import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import Image from './src/image.js'
import upload from './src/multer.js'
import {fileURLToPath} from 'url'
import path from 'path'

env.config({
  path:'./.env'
})

// Es6

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()
// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))


const port = process.env.PORT

// MongoDB connection

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB Successfully Connected.");
}).catch((err) => {
  console.log(`MongoDB Connection Error ${err}`);
})

// Routes

// Home

app.get('/' , async(req , res) => {
  try{

  }catch(){

  }
})

// upload image

app.post('/upload', upload.single('image') , async(req , res) => {
  try{

  }catch(){

  }
})




app.listen(port , () => {
  console.log(`Server start on port ${port}`);
})