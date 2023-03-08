import express from 'express';
import mongoose from 'mongoose';
import blogRouter from "./routes/user-routes";
import router from "./routes/user-routes";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use("/api/user", blogRouter);


mongoose
    .connect(
    'mongodb+srv://admin:NuF1e85R3Z5lBT4u@cluster0.ds4eheq.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => app.listen(5000))
.then(() => console.log("connected to DB and listening to localhost 5000")
)
.catch((err) => console.log(err));






//NuF1e85R3Z5lBT4u