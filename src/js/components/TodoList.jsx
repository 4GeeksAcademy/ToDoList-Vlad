import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Escribe una nueva tarea..."
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No hay tareas pendientes.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <span>{task}</span>
                <button onClick={() => handleDeleteTask(index)}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
   
      <div className="task-count">
        <p>Tienes {tasks.length} tarea(s) pendiente(s).</p>
      </div>
    </div>
  );
};

export default TodoList;