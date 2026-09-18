import "./config/env.js";
import express from "express";
import pool from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 3000;

try {
  const connection = await pool.getConnection();
  connection.release();
  console.log("db connected");
} catch (error) {
  console.error("Error connecting to the database:", error);
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("server running");
});

export default app;
