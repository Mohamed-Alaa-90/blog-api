import express from "express";
import {
  registerUserSchema,
  loginUserSchema,
} from "../validators/users.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { login, register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerUserSchema), register);

authRouter.post("/login", validate(loginUserSchema), login);
export default authRouter;
