import express from "express";
import todoRouter from "./routers/todo.js";
const app = express();
app.use("/todos", todoRouter);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
