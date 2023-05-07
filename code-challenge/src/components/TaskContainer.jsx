import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import { v4 as uuidv4 } from "uuid";
import EditTask from "./EditTask";
import Navbar from "./Navbar";
import Swal from 'sweetalert2';




uuidv4();

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    if(todo !== ""){
      setTasks([
        ...tasks,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
    else {
      Swal.fire({
        title: 'Oops!',
        text: 'No es posible ingresar una tarea vacía',
        icon: 'error',
        confirmButtonText: 'Confirmar',
        timer: 5000,
        timerProgressBar: true,
        customClass: {
          actions: "bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-2xl border-4 text-white font-semibold rounded"
        },
        buttonsStyling: false,

        
      })
    }
    
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTodo = (todo, id) => {
    if(todo !== "") {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, todo, isEditing: !task.isEditing, task: todo }
            : task
        )
      );
    }
    else {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, todo, isEditing: !task.isEditing}
            : task
        )
      );
      Swal.fire({
        title: 'Oopsi!',
        text: 'No es posible dejar una tarea vacía',
        icon: 'warning',
        confirmButtonText: 'Confirmar',
        timer: 5000,
        timerProgressBar: true,
        customClass: {
          actions: "bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-2xl border-4 text-white font-semibold rounded"
        },
        buttonsStyling: false
      })
    }
    
    
  };

  return (
    <div>
      <Navbar />
      <TaskForm addTask={addTask} />

      {tasks.map((todo) =>
        todo.isEditing ? (
          <EditTask editTask={editTodo} task={todo} />
        ) : (
          <Tasks
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      )}
    </div>
  );
};

export default TaskContainer;
