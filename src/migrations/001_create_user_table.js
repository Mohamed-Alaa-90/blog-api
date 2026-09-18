import pool from "../config/db.js";

export const createUserTable = async () => {
  await pool.query(
    `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        gender ENUM('male','female') NOT NULL,
        role ENUM('admin','user') DEFAULT 'user',
        image VARCHAR(255) DEFAULT NULL,
        address VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `,
  );
};
