import "../config/env.js";
import { createUserTable } from "./001_create_user_table.js";

const migrate = async () => {
  try {
    await createUserTable();
    console.log("Migration Completed");
    process.exit(0);
  } catch (error) {
    console.error("Migration Failed:", error);
    process.exit(1);
  }
};

migrate();
