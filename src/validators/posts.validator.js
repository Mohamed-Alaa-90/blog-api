import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(1, "Content is required"),
});

const updatePostSchema = z
  .object({
    title: z.string().min(5, "Title must be at least 5 characters").optional(),
    content: z.string().min(1, "Content is required").optional(),
  })
  .refine((data) => data.title != undefined || data.content != undefined, {
    message: "At least one field is required to update the post",
  });

export { createPostSchema, updatePostSchema };
