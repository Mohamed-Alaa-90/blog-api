import express from "express";
import {
  registerUserSchema,
  loginUserSchema,
} from "../validators/users.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { getMe, login, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const authRouter = express.Router();

authRouter.post("/register", validate(registerUserSchema), register);

authRouter.post("/login", validate(loginUserSchema), login);
authRouter.get("/me", authMiddleware, getMe);
export default authRouter;
