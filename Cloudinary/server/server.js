import express from 'express'
import router ,  { upload } from './routes/file.routes.js'

const app = express()
const port = 3020

app.get("/" , (req , res) => {
  res.send("Hello Cloudinary!")
})

app.use('/upload' , router)

app.listen(port , () => {
  console.log("server start on port 3020");
})