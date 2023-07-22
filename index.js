import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from"./routes/auth.js"
import usersRoute from"./routes/users.js"
import hotelsRoute from"./routes/hotels.js"
import roomsRoute from"./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()
dotenv.config()

const connect = async ()=>
{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb..")
    }
    catch(error)
    {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>
{
    console.log("mongodb disconnected..")
})
//middlewares
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);

//error middleware
app.use((err,req,res,next)=>
{

    const errStatus = err.status || 500;
    const errMessage = err.message || "something went wrong";
    return res.status(errStatus).json(
    {
         success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack

    });
    
})
const corsConfig = {
    origin: '',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))
app.listen(8800,()=>{
    connect();
    console.log("connected to backend.")
})