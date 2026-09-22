import User from "../models/user.model.js";
import { sendSuccess, sendError } from "../utils/response.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return sendError(res, 409, "user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  const userResponse = user.toObject();
  delete userResponse.password;
  return sendSuccess(res, 201, "user created successfully", userResponse);
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return sendError(res, 401, "Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return sendError(res, 401, "Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );
  const userResponse = user.toObject();
  delete userResponse.password;

  return sendSuccess(res, 200, "Login successful", {
    token,
    user: userResponse,
  });
};
export const logout = async (req, res) => {
  return sendSuccess(res, 200, "Logout successful");
};
export const getMe = async (req, res) => {
  const userResponse = req.user.toObject();

  delete userResponse.password;

  return sendSuccess(res, 200, "User fetched successfully", userResponse);
};
