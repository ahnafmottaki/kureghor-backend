import { type Request, type Response } from "express";
import { authService } from "./auth.service.js";
import type { LoginSchema } from "../../zod/auth.zod.js";
export const login = async (req: Request, res: Response) => {};

export const register = async (req: Request, res: Response) => {};

export const adminLogin = async (req: Request, res: Response) => {
    const credentials: LoginSchema = req.body;
    const admin = await authService.adminLogin(req.body);
    return res.json({
        success: true,
        message: "login successful",
        data: admin,
    });
};

export const authController = {
    login,
    register,
    adminLogin,
};
