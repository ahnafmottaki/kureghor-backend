import type { NextFunction, Request, Response } from "express";
import type { _ZodType } from "zod";

const validate = (schema: _ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (result.error) return next(result.error);
        next();
    };
};

export default validate;
