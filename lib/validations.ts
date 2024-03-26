import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Question title must be of atleast 5 characters" })
    .max(150, { message: "Question title must be less than 150 characters" }),
  explanation: z.string().min(40),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
