import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import { sendError, sendSuccess } from "../utils/response.js";
import mongoose from "mongoose";
export const createComment = async (req, res) => {
  const { postId } = req.params;
  if (!mongoose.isValidObjectId(postId)) {
    return sendError(res, 400, "Invalid post ID");
  }
  const post = await Post.findById(postId);
  if (!post) {
    return sendError(res, 404, "Post not found");
  }

  const { content } = req.body;
  const comment = await Comment.create({
    content,
    postId: postId,
    userId: req.user._id,
  });

  return sendSuccess(res, 201, "Comment created successfully", comment);
};
