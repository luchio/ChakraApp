const session = require("express-session");
//const RedisStore = require('connect-redis').default;
//const redisClient = require("../redis")
require('dotenv').config();



const sessionMiddleware = session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    //store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })

  //nos retorna una funcion, esa funcion es un socket middlware, 
  const wrap = expressMiddleware => (socket, next) =>
  expressMiddleware(socket.request, {}, next);
  
  const corsConfig ={
    origin: "http://127.0.0.1:5173",
    credentials:true,
}

  module.exports = {sessionMiddleware,wrap,corsConfig};