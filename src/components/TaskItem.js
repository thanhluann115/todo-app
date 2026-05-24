import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={`task-item ${
        task.completed ? "done" : ""
      }`}
    >
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <div>
          <p className="task-text">{task.text}</p>

          <small className="task-date">
            Added: {task.createdAt}
          </small>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;