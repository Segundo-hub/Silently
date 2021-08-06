const chalk = require("chalk")

module.exports.logSucces = (message) => {
	console.log(chalk.bold.green(`\n\t Sucess => ${chalk.blue(message)}\n`))
}

module.exports.logError = (message, error) => {
	console.info(chalk.bold.red(`\n\t Error => ${chalk.cyan(message)}  ${error}\n`))
}

module.exports.logInfo = (message, error) => {
	console.info(chalk.bold.yellow(`\n\t Error => ${chalk.whiteBright(message)}  ${error}\n`))
}

module.exports.logListen = (message) => {
	process.stdout.write("\u001b[2J\u001b[0;0H")
	console.log(
		chalk.magenta.bold(
			"\n" +
				chalk.bold.yellow.bgGreen("Listening on: ") +
				`
    -----------------------------
    |   ${chalk.underline(`http://localhost:${message}`)}  |
    -----------------------------
    ` +
				"\n"
		)
	)
}
