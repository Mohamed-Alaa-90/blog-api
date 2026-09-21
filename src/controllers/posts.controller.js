import Post from "../models/post.model.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  const newPost = await Post.create({
    title,
    content,
  });

  return res.status(201).json({
    status: "success",
    message: "Post created successfully",
    data: newPost,
  });
};

export const getPosts = async (req, res) => {
  const posts = await Post.find();

  return res.status(200).json({
    status: "success",
    message: "Posts retrieved successfully",
    data: posts,
  });
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid Post Id",
    });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({
      status: "error",
      message: "Post Not Found",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Post fetched successfully",
    data: post,
  });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid Post Id",
    });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({
      status: "error",
      message: "Post Not Found",
    });
  }

  post.set(updates);

  await post.save();

  return res.status(200).json({
    status: "success",
    message: "Post updated successfully",
    data: post,
  });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid Post Id",
    });
  }

  const result = await Post.deleteOne({
    _id: id,
  });

  if (result.deletedCount === 0) {
    return res.status(404).json({
      status: "error",
      message: "Post Not Found",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
};
