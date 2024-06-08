const User = require("../models/UserModel");

//get normal user
exports.getUser = async (req,res)=> {
    try{
        const user = await User.findOne().select("-password -email");
        if(!user)
        return res
       .status(404)
       .json({success:false, message:"user not found"});
       res.status(200).json({success:true, user});

    }catch(error){
        res.status(500).json({success:false, message:error.message});
    }
};

//get admin user
exports.authUser  = async(req,res)=>{
    const userId = req.id;
    try {
        const user = await User.findById(userId, "-password");
        return res.status(200).json({success: true,user});
    }
        catch(error){
            res.status(500).json({success:false, message:error.message});
        }
}


    


