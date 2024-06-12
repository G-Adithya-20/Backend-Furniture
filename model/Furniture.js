const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "fid":{type:String,required:true},
        "categories":{type:String,required:true},
        "brand":{type:String,required:true},
        "price":{type:String,required:true}
    }
)
const furnituremodel=mongoose.model("Furniture",schema);
module.exports={furnituremodel}