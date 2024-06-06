const jwt = require("jsonwebtoken")

exports.refreshToken = async(req,res,next) => {
  try{
    const cookies = req.headers.cookie;
    const prevToken = cookie.split("=")[1];

    //check if token is not present 
    if(!prevToken)
    return res 
.status(401)
.json({success:false, message:"please login first"})

//verify token
jwt.verify(prevToken, process.env.JWT_SECRET, (error, user) =>{
    if(error)
    return res.status(403).json({ success:false,message:error.message});
    
    //clear previous token
    res.clearCookie("token");
n
    // Creating a newtoken
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
     req.id = user.id;
     next();

});

  }
  catch(error){
    return res.status(500).json({success:false, mesdsage:error.message});
    
  }
};
