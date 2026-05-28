import type { NextFunction, Request, Response } from "express";

const asyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export { asyncHandler };
