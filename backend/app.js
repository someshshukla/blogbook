import express from 'express';
import mongoose from 'mongoose';
const app = express();



mongoose
    .connect(
    'mongodb+srv://admin:NuF1e85R3Z5lBT4u@cluster0.ds4eheq.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => app.listen(5000))
.then(() => console.log("connected to DB and listening to localhost 5000")
)
.catch((err) => console.log(err));






//NuF1e85R3Z5lBT4u