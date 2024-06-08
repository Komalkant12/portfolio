const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {  skill:{
        type:String,
        require:true,
    },
    level:{
        type:Number,
    },
},
  {timestamps: true}
);

module.exports = mongoose.model("skill", skillSchema);