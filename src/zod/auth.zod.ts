import * as z from "zod";

const adminSchema = z.object({
    full_name: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const registerSchema = z.object({
    full_name: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
    full_name_bangla: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
    fathers_name: z
        .string()
        .min(3, "Fathers name must be at least 3 characters long"),
    mothers_name: z
        .string()
        .min(3, "Mothers name must be at least 3 characters long"),
    present_address: z
        .string()
        .min(3, "Present address must be at least 3 characters long"),
    permanent_address: z
        .string()
        .min(3, "Permanent address must be at least 3 characters long"),
    contact_no: z
        .string()
        .min(3, "Contact number must be at least 3 characters long"),
    guardians_number: z
        .string()
        .min(3, "Guardians number must be at least 3 characters long"),
    institution: z
        .string()
        .min(3, "Institution must be at least 3 characters long"),
    ssc_batch: z.number().min(1, "SSC batch must be at least 1"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    blood_group: z
        .string()
        .min(3, "Blood group must be at least 3 characters long"),
    nid_birth_document: z
        .string()
        .min(3, "document url must be at least 3 characters long"),
    profile_pic: z
        .string()
        .min(3, "Profile picture must be at least 3 characters long"),
});

const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginSchema = z.infer<typeof loginSchema>;
type RegisterSchema = z.infer<typeof registerSchema>;
type AdminSchema = z.infer<typeof adminSchema>;

export {
    loginSchema,
    registerSchema,
    adminSchema,
    type LoginSchema,
    type RegisterSchema,
    type AdminSchema,
};
