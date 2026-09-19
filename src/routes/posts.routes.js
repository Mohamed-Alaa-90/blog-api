import express from "express";
import { createPost } from "../controllers/posts.controller.js";
const postsRouter = express.Router();

postsRouter.post("/", createPost);

export default postsRouter;
