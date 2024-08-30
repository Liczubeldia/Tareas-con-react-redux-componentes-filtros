// src/components/AddTodo.jsx
import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";

const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
      date,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDate("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTodo}>Agregar Tarea</button>
    </div>
  );
};

export default AddTodo;
