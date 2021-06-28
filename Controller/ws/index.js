const socket = require('socket.io')

class Socket {
   static io = null
   static configure(http, config = {}) {
      this.io = socket(http, config)
      return this
   }
}

module.exports.Socket = Socket
