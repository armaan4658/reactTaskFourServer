import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import {userRouter} from './routes/user.js';
const app = express();
const PORT = process.env.PORT||5000;
// Opened Connection to DB, movieData - db name
const url = process.env.MONGO_DB_URI  ;
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));
// middleware
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send({"message":"Api working"});
})
app.use("/users", userRouter);
app.listen(PORT, () => console.log("The server is started in " + PORT));