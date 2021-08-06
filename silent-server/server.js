require("dotenv").config()
const express = require("express")
const MongoConection = require("./domain/repository/mongo")
MongoConection()
const app = express()
const path = require("path")
const http = require("http").createServer(app)
const cors = require("cors")
const { logListen } = require("./utils/magic")

/* App Statics */
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "client/public")))
app.use(cors())

/* Import Routes */
const userRoute = require("./domain/router/user")
const messageRoute = require("./domain/router/message")

/* Route Middleware */
app.use("/api/user", userRoute)
app.use("/api/messages", messageRoute)

const port = process.env.PORT || 8080
http.listen(port, () => {
	logListen(port)
})
