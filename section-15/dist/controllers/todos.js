export const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = {
        id: new Date().toISOString(),
        text: text,
    };
    console.log(newTodo);
    res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};
