import React, { useEffect, useContext } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoProvider, { TodoContext } from "./TodoContext";
import "./styles.css"; // Importa el archivo CSS

const App = () => {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [setTodos]);

  return (
    <div className="App">
      <Header />
      <AddTodo />
      <FilterTodos />
      <TodoList />
    </div>
  );
};

const AppWithProvider = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default AppWithProvider;
