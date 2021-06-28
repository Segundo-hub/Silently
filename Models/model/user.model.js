
const { model, Schema } = require('mongoose')

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
      minlength: 6
   },
   messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Messages',
   }]
})

module.exports = model('User', userSchema)