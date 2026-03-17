import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js'

const app = express()

dotenv.config({
  path:"./.env"
})

const PORT = process.env.PORT

app.listen(PORT , () => {
  connectDB()
  console.log(`Server start on http://localhost:${PORT}`);
})




