require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const users = require("./models/userSchema");
const router1 = require('./routes/routers')

//database connection
connection();


//middlewares
app.use(express.json())
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

app.get("/",(req,res)=>{
  res.json("hello");
)}



//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/routers",router1);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))
