const mongoose = require("mongoose");

const UserSchema = new mongoose.schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        password:{
            type:String,
            require:true,
           
        },
        date:{
            type:Date,
            default:Date.now,

        }
    }
)
