const map = require('express').Router()
const User = require('./../../Models/model/user.model')
const Message = require('./../../Models/model/message.model')
const { isAuthenticated } = require('./../auth/isAuth')
const { Socket } = require('./index')

map.get('/', isAuthenticated, async (req, res) => {
   try {
      const messages = await Message.find({ owner: req.user._id }).select({ __v: 0 }).populate({
         path: 'owner',
         select: { messages: false, password: false, __v: false }
      })

      Socket.io.on('connection', (socket) => {
         console.log('User Conected')
         socket.emit('messages', messages)
      })

      res.status(200).send(messages)

   } catch (error) {
      res.status(404).send({ msg: 'Error Not Avible', error })
   }
})

module.exports = map