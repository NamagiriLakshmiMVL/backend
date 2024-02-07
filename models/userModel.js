const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        day: { type: String, required: true },
        month: { type: String, required: true },
        year: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        message:{type:Array}
    },
    { timestamps: true }
)

const userModel = mongoose.model("newusers", userSchema)

module.exports = userModel