import express from "express";
import { createCommentSchema } from "../validators/comments.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createComment } from "./../controllers/comments.controller.js";
const commentsRouter = express.Router();

commentsRouter.post(
  "/:postId/comments",
  authMiddleware,
  validate(createCommentSchema),
  createComment,
);

export default commentsRouter;
