import React, { useRef } from 'react';
import "./NewTodo.css"

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo内容</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">TODOの追加</button>
      </div>
    </form>
  );
};
