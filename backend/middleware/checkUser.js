const jwt = require("jsonwebtoken")

exports.checkUser = async(req, res , next) => {
    try{
        
        //check if token is not present 
        if(!token)
        return res 
    .status(401)
    .json({success:false, message:"please login first"})
    
    //verify token
    const user = jwt.verify(token, process.env.JWT_SECRET);

    //clear prevos token
    res.clearCookie("token")
        
     // Creating a new token
     const newtoken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30s",
    });

    // Sending token cookie
    res.cookie("token", newtoken, {
        path: "/",
        httpOnly: true, 
        expires: new Date(Date.now() + 1000 * 30),  // Expires in 30s
        sameSite: "lax",
    });
    return res
    .status(401)
    .json({success:false, message:"user is logged in,user"});
    
   }
   
     catch(error){
       return res
       .status(401)
       .json({success:false, message:"invalid token are expire"});
       
     }
};    

