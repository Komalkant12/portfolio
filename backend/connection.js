const mongoose = require("mongoose");

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL)
    if(connection.STATES.disconnected){
        console.log("DB connection is Failed");

    }
    else{
        console.log("DB connection is successful");
    }
};
module.exports = { connectDB }