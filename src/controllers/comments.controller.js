import Comment from "../models/comment.model.js";
import { sendError, sendSuccess } from "../utils/response.js";
export const createComment = async (req, res) => {
  const { postId } = req.params;
};
