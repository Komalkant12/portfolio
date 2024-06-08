exports.contact = async (req,res) => {
    try{
        const { name , email , message} = req.body;
        const userMsg = `Name : ${name}\nEmail: ${email}\nMessage : ${message}`;
    }
        catch (error){
             return res.status(500).json ({success:false, message: error.message});
        }
    };
