import { type NextFunction, type Request, type Response } from "express";
import { authService } from "./auth.service.js";
import type { LoginSchema } from "../../zod/auth.zod.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/apiResponse.js";
export const login = async (req: Request, res: Response) => {};

export const register = async (req: Request, res: Response) => {};

export const adminLogin = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const credentials: LoginSchema = req.body;
        const admin = await authService.adminLogin(credentials);
        new ApiResponse(200, "login successful", admin).send(res);
    },
);

export const authController = {
    login,
    register,
    adminLogin,
};
