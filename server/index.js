import express from 'express'
import { connectMongoDB } from './utils/mongodb.js';
import { userRouter } from './routes/user.js';
import cors from 'cors'

const app = express();
const PORT = 5173;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",userRouter);

connectMongoDB()
 .then(()=>{
    app.listen(PORT,()=>{
        console.log("App is listening.");
    })
 })
 .catch((err) => {
    console.log("unable to connect to MongoDB", err);
 })