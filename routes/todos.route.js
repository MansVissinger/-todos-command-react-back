const {todoController} = require("../controllers/todo.controller");

const {Router} = require("express")

const router = Router()

router.get("/", todoController.getAllToDo)
router.post("/add", todoController.addToDo)
router.delete("/delete/:id", todoController.removeToDo)
router.patch("/update/:id", todoController.updateToDo)

module.exports = router