  import User from "../models/user.model.js";
  import { sendSuccess, sendError } from "../utils/response.js";

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
