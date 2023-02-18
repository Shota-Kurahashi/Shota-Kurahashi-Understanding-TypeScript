import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routers/todo.js";

const app = express();

app.use("/todos", todoRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000);
