// src/components/TodoItem.jsx
import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  if (!todo) {
    return null;
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.title}</span>
      <span>{todo.date}</span> {/* Muestra la fecha de la tarea */}
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </div>
  );
};

export default TodoItem;
