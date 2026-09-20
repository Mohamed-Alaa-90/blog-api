import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(1, "Content is required"),
});

export { createPostSchema };
