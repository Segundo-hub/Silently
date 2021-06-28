const chalk = require('chalk');
const mongoose = require('mongoose')

const MongoConection = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: true,
      });
      console.log(chalk.bold.green("\n =-> MongoDB is connected\n"));

   } catch (e) {
      console.log(chalk.bold.red("\n =-> MongoDB conection is failuire: \n") + chalk.grey(e))
   }
}


module.exports = MongoConection;