import { Router } from "express";
import { authController } from "./auth.controller.js";
import validate from "../../middlewares/validation.js";
import { adminSchema, loginSchema } from "../../zod/auth.zod.js";

const router = Router();

router.post("/login", authController.login);

router.post("/register", authController.register);

router.post("/admin", validate(loginSchema), authController.adminLogin);

export default router;
