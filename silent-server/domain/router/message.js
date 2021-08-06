const map = require("express").Router()
const messageController = require("../controllers/msg.routes")
const { isAuthenticated } = require("../middlewares")

map.post("/new", isAuthenticated, messageController.newMessage)

map.get("/get-all", isAuthenticated, messageController.getMessages)

module.exports = map
