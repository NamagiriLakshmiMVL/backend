const mongoose = require("mongoose")

const deleteSchema = mongoose.Schema(
    {
        _id:{type:String,required:true},
        from:{type:String,required:true},
        to:{type:String,required:true},
        subject:{type:String,required:true},
        message:{type:String,required:true}

    }
)

const deleteModel = mongoose.model("deletedMsg",deleteSchema)

module.exports = deleteModel