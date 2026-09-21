import Post from "../models/post.model.js";
import mongoose from "mongoose";
import { sendError, sendSuccess } from "../utils/response.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  const newPost = await Post.create({
    title,
    content,
  });

  return sendSuccess(res, 201, "Post created successfully", newPost);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find();

  return sendSuccess(res, 200, "Posts fetched successfully", posts);
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return sendError(res, 400, "Invalid Post Id");
  }

  const post = await Post.findById(id);

  if (!post) {
    return sendError(res, 404, "Post Not Found");
  }

  return sendSuccess(res, 200, "Post fetched successfully", post);
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.isValidObjectId(id)) {
    return sendError(res, 400, "Invalid Post Id");
  }

  const post = await Post.findById(id);

  if (!post) {
    return sendError(res, 404, "Post Not Found");
  }

  post.set(updates);

  await post.save();

  return sendSuccess(res, 200, "Post updated successfully", post);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return sendError(res, 400, "Invalid Post Id");
  }

  const result = await Post.deleteOne({
    _id: id,
  });

  if (result.deletedCount === 0) {
    return sendError(res, 404, "Post Not Found");
  }

  return sendSuccess(res, 200, "Post deleted successfully");
};
