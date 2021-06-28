const map = require('express').Router()
const User = require('./../Models/model/user.model')
const Message = require('./../Models/model/message.model')
const { isAuthenticated } = require('./auth/isAuth')
const { sanitize } = require('./middlewares/xss')

map.get('/get-all', isAuthenticated, async (req, res) => {
   try {
      const messages = await Message.find({ owner: req.user._id }).select({ __v: 0 }).populate({
         path: 'owner',
         select: { messages: false, password: false, __v: false }
      })

      const Socket = res.locals["socket"];

      Socket.on('connection', (socket) => {
         console.log('User Conected')
         socket.emit('messages', messages)
      })

      res.status(200).send(messages)

   } catch (error) {
      res.status(404).send({ msg: 'Error Not Avible', error })
   }
})

map.post('/create', isAuthenticated, async (req, res) => {
   try {
      const { message, title } = req.body;

      const currentUser = await User.findById(req.user._id)
      const newMessage = new Message({
         title,
         message
      })

      newMessage.owner = currentUser; await newMessage.save()
      currentUser.messages.push(newMessage); await currentUser.save()

      res.send({ msg: 'Created' })

   } catch (error) {
      res.send({ msg: 'Error Not Avible' })
   }
})


module.exports = map