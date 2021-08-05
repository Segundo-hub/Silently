const chalk = require('chalk')

module.exports.logSucces = (message) => {
   console.log(chalk.bold.green(`\n\t Sucess => ${chalk.blue(message)}\n`))
}

module.exports.logError = (message, error) => {
   console.info(chalk.bold.red(`\n\t Error => ${chalk.cyan(message)}  ${error}\n`))
}
