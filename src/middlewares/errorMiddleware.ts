import type { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

const isZodError = (err: unknown) => err instanceof ZodError;

const errorMiddleware = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let statusCode = 500;
    let message = ReasonPhrases.INTERNAL_SERVER_ERROR;
    let error: null | unknown = null;

    if (isZodError(err)) {
        statusCode = StatusCodes.BAD_REQUEST;
        message = ReasonPhrases.BAD_REQUEST;
        error = err;
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        ...(error ? { error } : {}),
    });
};

export default errorMiddleware;
