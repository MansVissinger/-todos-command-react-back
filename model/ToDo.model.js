const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    text: String,
    priority: {
        type: Number,
        default: 1
    },
    category:{
        default: "61a0da17add1119cca5e5666",
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

const ToDo = mongoose.model("ToDo", todoSchema)

module.exports = ToDo



