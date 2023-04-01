const express = require('express');
const helmet = require('helmet');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');
const authRouter = require('./router/authRouter');
const { sessionMiddleware, corsConfig,wrap } = require('./controllers/serverController');
const {authorizeUser} = require('./controllers/socketController')
const server = require("http").createServer(app);

require('dotenv').config();
const io = new Server(server,{
    cors:corsConfig,
})



//middlewares
app.use(helmet());
app.use(cors(corsConfig))
app.use(express.json());
//la cookie en el browser sera un codigo, y cuando se haga una peticion al servidor express-session buscara ese
//codigo en las cookies y traera la info del usuario de ese codigo
app.use(sessionMiddleware);
app.use("/auth",authRouter)

io.use(wrap(sessionMiddleware))
io.use(authorizeUser)
io.on("connect",socket=>{
  console.log(socket.request.session.user);
})

server.listen(4000,()=>{
    console.log('Servidor corriendo en el puerto 4000');
})