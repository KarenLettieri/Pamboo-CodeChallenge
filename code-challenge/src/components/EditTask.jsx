import React, { useState } from "react";

const EditTask = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
  };

  return (
    <form className="mb-4 px-6 pt-4 pb-2" onSubmit={handleSubmit}>
      <div className="w-1/4 todo bg-teal-300 border-teal-300 hover:border-teal-400 rounded-full px-2 py-1 text-xl font-semibold text-gray-500 m-auto my-1">
        <input
          maxLength="80"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="focus:outline-none appearance-none bg-transparent border-none w-full"
        ></input>
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white py-1 px-2 rounded"
        >
          Editar
        </button>
      </div>
    </form>
  );
};

export default EditTask;
