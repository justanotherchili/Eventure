import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(3000, "Description must be less than 2000 characters"),
  location: z
    .string()
    .nonempty("Please add a location"),
  imageUrl: z.string().nonempty("Please add an image"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string().nonempty("Category must be selected"),
  price: z.string(),
  isFree: z.boolean(),
});
