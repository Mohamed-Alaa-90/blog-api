import express from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/posts.controller.js";
import {
  createPostSchema,
  updatePostSchema,
} from "../validators/posts.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
const postsRouter = express.Router();


postsRouter
  .get("/", getPosts)
  .get("/:id", getPostById)
  .post("/", validate(createPostSchema), createPost)
  .patch("/:id", validate(updatePostSchema), updatePost)
  .delete("/:id", deletePost);

export default postsRouter;
