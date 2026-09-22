import { sendError } from "../utils/response.js";

export const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role != role) {
      return sendError(res, 403, "Forbidden");
    }

    return next();
  };
};
