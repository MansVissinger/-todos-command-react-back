const {categoriesController} = require("../controllers/categories.controller");

const {Router} = require("express")

const router = Router()

router.get("/", categoriesController.getAllCategories)
router.post("/add", categoriesController.createCategory)
router.delete("/remove/:id", categoriesController.deleteCategory)

module.exports = router