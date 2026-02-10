import File from "../models/file.models.js";

export const uploadFile = async(req , res) => {
  try{

    console.log("req file received : " , req.file);

    if(!req.file){
      return res.status(400).json({message:"No file uploded"})
    }

    const{
      originalName,
      mimetype,
      path:url,
      format,
      bytes:size,
    } = req.file

    const fileDoc = await File.create({
      originalName:originalName,
      url,
      public_id,
      format:format || mimetype.split("/"),
      size,
    })

    return res.json({
      message:"File Upload Successfully",
      file:{
        id:fileDoc._id,
        originalName:fileDoc.originalName,
        url:fileDoc.url,
        public_id:fileDoc.public_id,
        format:fileDoc.format,
        size:fileDoc.size
      }
    })

  }catch(err){
    return res.status(400).json({error:err.message})
  }
}