const express = require('express');
const helmet = require('helmet');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');
const authRouter = require('./router/authRouter');

const server = require("http").createServer(app);

const io = new Server(server,{
    cors:{
        origin: "http://127.0.0.1:5173",
        credentials: "true",
    },
})

//middlewares
app.use(helmet());
app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials:true,
}))
app.use(express.json())

app.use("/auth",authRouter)

io.on("connect",socket=>{})

server.listen(4000,()=>{
    console.log('Servidor corriendo en el puerto 4000');
})