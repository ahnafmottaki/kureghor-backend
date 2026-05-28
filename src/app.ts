import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Kureghor Foundation Bakend",
    });
});

export default app;
