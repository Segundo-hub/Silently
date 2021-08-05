const mongoose = require('mongoose')
const { logSucces, logError } = require('../utils/magic')

const MongoConection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,
		})
		logSucces('MongoDB is connected')
	} catch (e) {
		logError('MongoDB conection is failuire: ', e)
	}
}

module.exports = MongoConection
