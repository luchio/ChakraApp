const express = require('express');
const helmet = require('helmet');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');
const authRouter = require('./router/authRouter');
const server = require("http").createServer(app);
const session = require("express-session");
//const Redis = require('ioredis');
//const RedisStore = require('connect-redis').default;
require('dotenv').config();
const io = new Server(server,{
    cors:{
        origin: "http://127.0.0.1:5173",
        credentials: "true",
    },
})

//const redisClient = new Redis();


//middlewares
app.use(helmet());
app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials:true,
}))
app.use(express.json());
//la cookie en el browser sera un codigo, y cuando se haga una peticion al servidor express-session buscara ese
//codigo en las cookies y traera la info del usuario de ese codigo
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      credentials: true,
      name: "sid",
      //store: new RedisStore({ client: redisClient }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.ENVIRONMENT === "production" ? "true" : "true",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" : "none",
      },
    })
  );
app.use("/auth",authRouter)

io.on("connect",socket=>{})

server.listen(4000,()=>{
    console.log('Servidor corriendo en el puerto 4000');
})