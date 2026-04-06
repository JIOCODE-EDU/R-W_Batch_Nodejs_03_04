import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js'
import cors from 'cors'
import helmet from 'helmet'
import router from './src/routes/api.routes.js'

const app = express()

dotenv.config({
  path:"./.env"
})

// middleware
app.use(helmet());
app.use(cors({
  origin:"*",
  credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users' , router)

const PORT = process.env.PORT

app.listen(PORT , () => {
  connectDB()
  console.log(`Server start on http://localhost:${PORT}`);
})




