import * as z from "zod";

const adminSchema = z.object({
    full_name: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

`   id SERIAL PRIMARY KEY,
         full_name VARCHAR(255) NOT NULL,
         full_name_bangla VARCHAR(255) NOT NULL,
         fathers_name VARCHAR(255) NOT NULL,
         mothers_name VARCHAR(255) NOT NULL,
         present_address VARCHAR(255) NOT NULL,
         permanent_address VARCHAR(255) NOT NULL,
         contact_no VARCHAR(255) NOT NULL,
         guardians_number VARCHAR(255) NOT NULL,
         institution VARCHAR(255) NOT NULL,
         ssc_batch INT,
         password VARCHAR(255) NOT NULL,
         blood_group VARCHAR(255) NOT NULL,
         status VARCHAR(255) NOT NULL CHECK(status IN ('active', 'inactive', 'suspended')),
         obligation_start_date TIMESTAMP NOT NULL,
         status_in_foundation VARCHAR(255) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         updated_at TIMESTAMP`;

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
