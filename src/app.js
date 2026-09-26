import express from "express";
import { errorHandler } from "./middlewares/error.middleware.js";
import postsRouter from "./routes/posts.routes.js";
import authRouter from "./routes/auth.routes.js";
import commentsRouter from "./routes/comments.routes.js";
const app = express();

app.use(express.json());
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", commentsRouter);
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Blog Api is Running!",
  });
});

app.use(errorHandler);

export default app;
