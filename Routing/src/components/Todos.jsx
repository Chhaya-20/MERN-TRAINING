import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos: ", error));
  }, []);

  return (
    <div>
      <h1 style={{'margin-top':'60px'}}>Todos </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
