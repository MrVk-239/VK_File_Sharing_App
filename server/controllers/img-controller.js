import File from '../models/file.js';
export const uploadImage=async(req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname,
    }
    try {
        const file = await File.create(fileObj);
        res.status(200).json({path:`http://localhost:8000/file/${file._id}`, message:"File uploaded successfully",file});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getImage=async(req,res)=>{
    try {
        const file = await File.findById(req.params.fileid);
        if (!file) {
            return res.status(404).json({message: "File not found"});
        }
        await file.downloadCount++;
        await file.save();
        res.download(file.path, file.name);
        } catch (error) {
        res.status(500).json({error: error.message});
    }
}

