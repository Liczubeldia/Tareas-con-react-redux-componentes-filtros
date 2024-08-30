// src/components/FilterTodos.jsx
import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const FilterTodos = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <div className="filter-todos">
      <button onClick={() => setFilter("all")}>
        <i className="fas fa-list"></i> Todas
      </button>
      <button onClick={() => setFilter("completed")}>
        <i className="fas fa-check"></i> Completadas
      </button>
      <button onClick={() => setFilter("pending")}>
        <i className="fas fa-hourglass-half"></i> Pendientes
      </button>
    </div>
  );
};

export default FilterTodos;
