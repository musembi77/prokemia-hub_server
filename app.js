const express = require('express');
const cors = require('cors');
//const db = require("./config/database.js")
//db.connect()

// const connect = require("./routes/socket_connect.js")

const app = express()
app.use(express.json())

app.use(cors({credentials:true, 
    origin: '*' }));

// app.use("/connect",connect)

app.get('/',(req,res)=>{
	res.send("Home")
})

module.exports = app;