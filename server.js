require("dotenv").config({ path: "./config.env" });
const express = require('express');
const MongoConection = require('./Models'); MongoConection()
const app = express()
const path = require('path')
const http = require('http').createServer(app);
const cors = require("cors")
const { Socket } = require('./Controller/ws');

const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'client/public')))
app.use(cors());

Socket.configure(http, {
   cors: {
      origin: '*',
      methods: ['GET', 'POST']
   }
})

Socket.io.on('connection', (socket) => {
   console.log('Cliente Connected', socket.id)
})

app.use('/api/user', require('./Controller/user.routes'))
app.use('/api/messages', require('./Controller/main.routes'))



http.listen(port, () => {
   const chalk = require('chalk')
   process.stdout.write("\u001b[2J\u001b[0;0H");
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
   );
})

