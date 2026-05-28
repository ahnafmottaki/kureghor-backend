import type { Response } from "express";

class ApiResponse {
    constructor(
        public statusCode: number,
        public message: string,
        public data?: unknown,
    ) {}
    send(res: Response) {
        return res.status(this.statusCode).json({
            success: true,
            message: this.message,
            ...(this.data ? { data: this.data } : {}),
        });
    }
}

export default ApiResponse;
