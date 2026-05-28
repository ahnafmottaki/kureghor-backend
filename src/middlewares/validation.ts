import type { NextFunction, Request, Response } from "express";
import type { _ZodType, ZodAny } from "zod";

const validate = (schema: _ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        schema.parse(req.body);
        next();
    };
};

export default validate;
