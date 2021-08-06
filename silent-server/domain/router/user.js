const map = require("express").Router()
const userController = require("../controllers/user.routes")

map.post("/login", userController.login)

map.post("/register", userController.register)

module.exports = map
