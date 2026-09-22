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
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkPostOwnership } from "../middlewares/ownership.middleware.js";
const postsRouter = express.Router();

postsRouter
  .get("/", getPosts)
  .get("/:id", getPostById)
  .post("/", authMiddleware, validate(createPostSchema), createPost)
  .patch(
    "/:id",
    authMiddleware,
    checkPostOwnership,
    validate(updatePostSchema),
    updatePost,
  )
  .delete("/:id", authMiddleware, checkPostOwnership, deletePost);

export default postsRouter;
