const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
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

module.exports = mongoose.model("project", ProjectSchema);
