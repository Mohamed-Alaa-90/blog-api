import { z } from "zod";

const createCommentSchema = z.object({
  content: z.string().min(1, "Content is required"),
});
export { createCommentSchema };
