import jwt from "jsonwebtoken";
import { sendError } from "../utils/response.js";
import User from "../models/user.model.js";
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return sendError(res, 401, "Authentication required");
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return sendError(res, 401, "Invalid authentication format");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return sendError(res, 401, "User not found");
    }

    req.user = user;

    return next();
  } catch (error) {
    console.log(error);

    return sendError(res, 401, "Invalid or expired token");
  }
};
