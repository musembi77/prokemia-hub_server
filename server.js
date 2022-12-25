const http = require("http");
const app = require("./app.js");
const cors = require('cors')
require("dotenv").config();
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const port = process.env.Port || 8080

io.on('connection', (socket) => {
	console.log('user connected')
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
});

server.listen(port, (req,res)=>{
	console.log(`server listening on http://localhost:${port}`)
})