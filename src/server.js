import "./config/env.js";
import app from "./app.js";
import pool from "./config/db.js";

const PORT = process.env.PORT || 3000;

try {
  const connection = await pool.getConnection();
  connection.release();

  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error connecting to the database:", error);
  process.exit(1);
}
