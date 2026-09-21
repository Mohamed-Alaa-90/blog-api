import express from "express";
import { registerUserSchema } from "../validators/users.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerUserSchema), register);

export default authRouter;
