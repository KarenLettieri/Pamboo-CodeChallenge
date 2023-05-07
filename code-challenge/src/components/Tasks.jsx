import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="my-6 px-6">
      <div className="w-1/2 todo bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-700 rounded-full px-2 py-1 text-xl font-semibold text-gray-100 mx-auto my-1">
        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTask(task.id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
