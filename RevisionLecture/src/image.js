import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  filename:{
    type:String,
    required:true
  },
  originalName:{
    type:String,
    required:true
  },
  path:{
    type:String,
    required:true
  },
  size:{
    type:Number
  },
  mimetype:{
    type:String,
  },
} , {timestamps:true})

const Image = mongoose.model('Image' , imageSchema)

export default Image