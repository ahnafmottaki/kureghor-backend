class AppError extends Error {
    success: boolean = false;
    constructor(
        public statusCode: number,
        public message: string,
        public err?: unknown,
    ) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}
export default AppError;
