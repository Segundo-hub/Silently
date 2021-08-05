require("dotenv").config()
const express = require("express")
const MongoConection = require("./Models")
MongoConection()
const app = express()
const path = require("path")
const http = require("http").createServer(app)
const cors = require("cors")

const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.static(path.resolve(__dirname, "client/public")))
app.use(cors())

app.use("/api/user", require("./Controller/services/user.service"))
app.use("/api/messages", require("./Controller/main.routes"))

http.listen(port, () => {
	const chalk = require("chalk")
	process.stdout.write("\u001b[2J\u001b[0;0H")
	console.log(
		chalk.magenta.bold(
			"\n" +
				chalk.bold.yellow.bgGreen("Listening on: ") +
				`
    -----------------------------
    |   ${chalk.underline(`http://localhost:${port}`)}  |
    -----------------------------
    ` +
				"\n"
		)
	)
})
