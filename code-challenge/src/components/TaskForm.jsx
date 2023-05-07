import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form
      className="w-full max-w-sm flex-1 mx-auto my-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          maxLength="35"
          required
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Que vamos a hacer hoy?"
          className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
          id="username"
        ></input>
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Agregar tarea
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
