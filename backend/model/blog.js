import mongoose from "mongoose";


const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    
})