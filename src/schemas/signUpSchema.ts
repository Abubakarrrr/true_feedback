import { z } from "zod"

//we have only 1 value of name that why not use z.object syntax
export const userNameValidation = z.string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must not be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
})