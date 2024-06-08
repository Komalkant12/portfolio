const {sendMessage} = require("../middleware/sendMessage")
exports.contact = async (req,res) => {
    try{
        const { name , email , message} = req.body;
        const userMsg = `Name : ${name}\nEmail: ${email}\nMessage : ${message}`;
        const sentMessage = await sendMessage(userMsg);
        if(!sentMessage)
        return res 
    .status(400)
    .json({ success:false, message:"message not send"})
    return res
    .staus(200)
    .json({ success:true, message:"Message send successfully"})
    }
        catch (error){
             return res.status(500).json ({success:false, message: error.message});
        }
    };
