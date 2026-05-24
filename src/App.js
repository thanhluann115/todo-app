import React, { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showIncompleteOnly, setShowIncompleteOnly] =
    useState(false);

  // Add task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
  };

  // Toggle completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter
  const filteredTasks = showIncompleteOnly
    ? tasks.filter((task) => !task.completed)
    : tasks;

  return (
    <div className="app">
      <h1>Todo List</h1>

      <TaskForm addTask={addTask} />

      <div className="filter">
        <label>
          <input
            type="checkbox"
            checked={showIncompleteOnly}
            onChange={() =>
              setShowIncompleteOnly(!showIncompleteOnly)
            }
          />
          Show incomplete tasks only
        </label>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;