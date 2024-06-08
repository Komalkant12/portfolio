const Project =require("../models/ProjectModel");

exports.getProjects = async(req,res) => {
    try{
        const projects = await Project.find();
        if(!projects)
        return res
    .status(404)
    .json({ success: false, message:"Project not found"});

    return res.status(200).json({success:true,projects});

    }catch (error){
        return res.status(200).json({success:false,promessage: error.message});
    }
};

exports.addProject = async(req,res) => {
    const {name, desc, githubUrl, secureUrl, publicId, deleteToken} =
    req.body;
    try{
        
        if(!name || !desc)
       { return res
    .status(400)
    .json({ success: false, message:"Please fill al feilds"});
}
const newProject = await Project.create({
    name,
    desc,
    githubUrl,
    hostedUrl,
    img:secureUrl,
    publicId,
    deleteToken,
});
await newProject.save();
return res
.status(201)
.json({ success: true, message:"new project added"});
    }catch (error){
        return res.status(500).json({success:false,promessage: error.message});
    }
};

exports.removeProject  = async(req,res) => {
    const {id} = req.params;
    try{
        const project = await project.findByIdAndDelete(id);
        if(!project)
        return res 
    .status(404)
    .json({success:false, message:"project not found"});
    return res.status(200).json({success:false, message:"project deleted"});
    } catch(error) {
    return res.status(500).json({success:false, message:error.message});
    }
}

exports.updateProject  = async(req,res) => {
    const {id} = req.params;
    const updateData = req.body;  //get all dat from request body
    try{
        let project = await project.findById(id);
        if(!project)
        return res 
    .status(404)
    .json({success:false, message:"project not found"});

    //check if image property is exist
    if(updateData.img)
    {
        project.img = updateData.img;
    }

    for(const key in updatedData){
        if(key!== "img")
        project[key] = updatedData[key]
    }
      
    await project.save();
    return res.status(200).json({success:true, message:"project updated successfully"});
    } catch(error) {
    return res.status(500).json({success:false, message:error.message});
    }
}

