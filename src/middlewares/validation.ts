import type { NextFunction, Request, Response } from "express";
import type { _ZodType } from "zod";
import { asyncHandler } from "../utils/asyncHandler.js";

const validate = (schema: _ZodType) => {
    return asyncHandler((req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (result.error) throw result.error;
        next();
    });
};

export default validate;
