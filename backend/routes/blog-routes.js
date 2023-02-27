import express from 'express';
import { getAllBlogs } from '../controllers/blog-controller';
const router = express.Router();

router.get("/", getAllBlogs);