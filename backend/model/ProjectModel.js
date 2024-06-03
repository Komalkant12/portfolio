const mongoose = require("mongoose");

const ProjectSchema = new mongoose.SchemaTypes(
    {
        name:String,
        desc:String,
        img:String, //img= secure_url
        githubUrl:String,
        hostedUrl:String,
        publicId:String,
        deleteToken:String,
    },
    {timestamps:true}
);

module.exports = monngoose.model("project", ProjectSchema);
