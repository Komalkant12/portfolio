const User = require("../model/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const router = require("../routes/routes");

//singup route
exports.singup = async (req , res) => {
    const{name, email, password } = req.body; 

    let user;
    try{
//checking if user already exist
user = await User.findOne({email});
if(user) return res.status(400).json({msg : "user already exists"})

//hashing the password
const securePassword  = await bcrypt.hash(password, 10);

//creating new user
user = await User.create({
     name,
    email,
    password:securePassword,
});

//saving userr to db
await user.save();

return res 
.status(201)
.json({success: true,message:"usercreated successfully"});

    }
    catch(error){
        return res.status(500).json({success: false, message:error.message});
    }
    
};

exports.login = async (req , res) => {
    const{ email, password } = req.body;

try
//checking if user exist
let user = await User.findOne({ email });

if(!user)
return res
.status(404)
.json({success:false, message:"please sign up"})

//check if password matches
const comparePassword = await bcrypt.compare(password, user.password);

//if password does not match'
if(!comparePassword)
return res
.status(400)
.json({success:false, message:"Incorrect credentials"})

//if password matches

//check if token cookie is exist in the requst
const existingToken = req.cookies.token;

if(existingToken){
    res.clearcookie("token");
}
//creeating a token
const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
    expiresIn:"30s",
});

// sending token cookie
res.cookie("token", token, {
    path: "/",
    httpOnly: true, 
    expriresIn:new Date(Date.now() +1000*3),  //exprises in 30s
    sameSite: "lax";
})
return res.status(200).json({success:true, message:"logged in"});

catch(error){
  return res.status(500).json({success:false, message:error.message});

}
};

exports.logout = async(req,res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({success: true, message:"logout successfully"});

    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
};
