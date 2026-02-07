import multer from "multer";
import path from 'path'
import fs from 'fs'

// create directory

const uploadDir = './uploads'

if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir , {recursive:true})
}

// storage

const storage = multer.diskStorage({
  destination:function (req , file , cb){
    cb(null , uploadDir)
  },
  filename:function (req , file , cb){
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random * 1E9)
    cb(null , uniqueSuffix + path.extname(file.originalname))
  }
})

// File Filter

const fileFilter = (req , file , cb) => {
  const allowedTypes = /jpeg | jpg | png | gif | webp/ 
  const extname = allowedTypes.test(path.extname(file.originalname))
  const mimetype = allowedTypes.test(file.mimetype)

  if(mimetype && extname){
    return cb(null , true)
  }else{
    cb(new Error("Only image files are allowed."))
  }
}

// multer config

const upload = multer({
  storage:storage,
  limits:{
    fileSize:5 * 1024 * 1024
  },
  fileFilter:fileFilter
})

export default upload
