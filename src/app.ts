import express from "express";
import authRouter from "./modules/auth/auth.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Kureghor Foundation Bakend",
    });
});

export default app;
