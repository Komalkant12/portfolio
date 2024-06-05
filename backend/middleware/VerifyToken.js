const jwt = require("jsonwebtoken");
const User  = require("../models/UserModel");

exports.verifyToken = async(req, res, next)=>{
    //getting token from cookies;
    const {token} = req.cookies;

    try{
        //if no token found
        if(!token)
        return res.status(401).json({
            success: false,
            message: "Please login for access"
        });

        //verification of token
        const user = jwt.verify(token, process.env.JWT_SECRET);

        //adding user id to req object
        req.id= user.id;
             
        next();
        
    }
    catch (error) {
        return res
        .status(404)
        .json({success:false, message:"invalid token andd token expire"})
    }
};