import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  originalName:{
    type:String,
    required:true,
  },
  url:{
    type:String,
    required:true
  },
  publid_id:{
    type:String,
    required:true
  },
  format:String,
  size:Number,
} , {timestamps:true})


const File = mongoose.model("File", fileSchema)

export default File