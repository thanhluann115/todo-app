import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.trim() === "") return;

    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;