import express from "express";
import postsRouter from "./routes/posts.routes.js";
const app = express();

app.use(express.json());
app.use("/api/posts", postsRouter);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Blog Api is Running!",
  });
});

export default app;
