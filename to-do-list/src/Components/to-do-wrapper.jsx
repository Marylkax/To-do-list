import React, { Component } from "react";
import { ToDoForm } from "./to-do-form";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, { id }]);
  };
  return (
    <div className="todoWrapper">
      <ToDoForm addTodo={addTodo} />
    </div>
  );
};

export default ToDoWrapper;
