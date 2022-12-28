import React, { useEffect } from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {

  useEffect(() => { })
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};
