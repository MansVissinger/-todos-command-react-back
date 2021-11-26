const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    text: String,
    priority: {
        type: Number,
        default: 1
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

const ToDo = mongoose.model("ToDo", todoSchema)

module.exports = ToDo



