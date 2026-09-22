import Post from "../models/post.model.js";
import { sendError } from "../utils/response.js";

export const checkPostOwnership = async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (!post) {
    return sendError(res, 404, "Post not found");
  }

  if (req.user._id.toString() !== post.userId.toString()) {
    return sendError(res, 403, "You are not allowed to modify this post");
  }
  return next();
};
