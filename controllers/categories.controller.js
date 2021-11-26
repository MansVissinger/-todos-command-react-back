const Category = require("../model/Categoty.model")

module.exports.categoriesController = {
    createCategory: async (req, res) => {
        try {
            const {name} = req.body;
            const newCategory = await Category.create({name: name})
            res.json(newCategory)
        } catch (e) {
            res.json(e)
        }
    },

    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find()

            res.json(categories)
        } catch (e) {
            res.json(e)
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const {id} = req.params
            await Category.findByIdAndRemove(id)
            res.json(`Категория с ID ${id} удалена`)
        } catch (e) {
            res.json(e)
        }
    }
}