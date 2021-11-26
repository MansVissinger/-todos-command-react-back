const {Router} = require("express")

const router = Router()

router.use("/categories", require("./categories.route.js"))
router.use("/todos", require("./todos.route.js"))

module.exports = router