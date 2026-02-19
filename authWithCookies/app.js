import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'


dotenv.config({
  path:'./.env'
})

const app = express()

const port = process.env.PORT

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('🍔MongoDB Connected')).catch((err) => console.error('MongoDB Error' , err))

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser('lecture-auth-2026'))

app.listen(port , () => {
  console.log(`server start on port ${port}`);
})