import { Request, Response, NextFunction, RequestHandler } from "express";

export const createTodo: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const text = (req.body as { text: string }).text;
  const newTodo = {
    id: new Date().toISOString(),
    text: text,
  };
  console.log(newTodo);
  res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};
