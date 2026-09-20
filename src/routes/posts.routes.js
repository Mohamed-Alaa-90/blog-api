import express from "express";
import { createPost } from "../controllers/posts.controller.js";
import { createPostSchema } from "../validators/posts.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
const postsRouter = express.Router();

postsRouter.post("/", validate(createPostSchema), createPost);

export default postsRouter;
