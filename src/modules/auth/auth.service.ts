import { pool } from "../../db/index.js";
import type { LoginSchema } from "../../zod/auth.zod.js";
import { type User } from "./auth.repository.js";
import bcrypt from "bcryptjs";

const loginUser = async () => {};

const registerUser = async () => {};

const adminLogin = async (credentials: LoginSchema) => {
    const { email, password } = credentials;

    const adminExists = await pool.query(
        `
        SELECT * FROM admins WHERE email = $1
        `,
        [email],
    );
    if (adminExists.rows.length === 0) throw new Error("Admin not found");
    const admin = adminExists.rows[0];
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) throw new Error("Invalid password");
    const { password: adminPassword, ...rest } = admin;
    return rest;
};

const createAdmin = async () => {
    const adminExists = await pool.query(`
SELECT * FROM admins
        `);
    if (adminExists.rows.length > 0) return;
    await pool.query(
        `
INSERT INTO admins (full_name, email, password)
VALUES ($1, $2, $3)
        `,
        [
            "ahnaf mottaki",
            "ahnaf@example.com",
            await bcrypt.hash("password", 10),
        ],
    );
};

export const authService = {
    loginUser,
    registerUser,
    createAdmin,
    adminLogin,
};
