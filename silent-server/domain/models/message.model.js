const { model, Schema } = require('mongoose')

const messageSchema = new Schema({
	title: { type: String },
	message: {
		type: String,
		required: true,
	},
	date: { type: Date, default: Date.now },
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
})

module.exports = model('Messages', messageSchema)
