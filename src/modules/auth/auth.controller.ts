import { type Request, type Response } from "express";
export const login = async (req: Request, res: Response) => {};

export const register = async (req: Request, res: Response) => {};

export const adminLogin = async (req: Request, res: Response) => {};

export const authController = {
    login,
    register,
    adminLogin,
};
