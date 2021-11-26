const ToDo = require("../model/ToDo.model")

module.exports.todoController = {
    getAllToDo:async (req, res) => {
        try {
            const ToDos = await ToDo.find()
            res.json(ToDos)
        } catch (e) {
            res.json("ошибка: " + e)
        }
    },
    addToDo: async (req, res) => {
        try {
            const {text, priority, category} = req.body
            const newToDo = await ToDo.create({
                text: text,
                priority: priority,
                category: category
            })
            res.json(newToDo)
        } catch (e) {
            res.json("ошибка: " + e)
        }
    },
    removeToDo: async (req, res) => {
        try {
            const {id} = req.params
            const removeToDO = await ToDo.findByIdAndRemove(id);
            res.json(removeToDO);
        }
        catch (e) {
            res.json("ошибка: " + e)
        }
    },
    updateToDo: async (req, res) => {
        try{
            const {id} = req.params
            const updateToDo = await ToDo.findByIdAndUpdate(id, {
                $set: req.body,
            });
            res.json(updateToDo);
        } catch (e) {
            res.json("ошибка: " + e)
        }
    }
}