import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { v4 as uuidv4 } from 'uuid';
import EditTask from './EditTask';

uuidv4();

const TaskContainer = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = todo => {
    setTasks([...tasks, { id: uuidv4(), task: todo, completed: false, isEditing: false }])

  }

  const toggleComplete = id => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id) => {
    setTasks
      (tasks.map((task) => task.id === id ? { ...task, isEditing: !task.isEditing} : task))
  }

  const editTodo = (todo, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, todo, isEditing: !task.isEditing, task: todo} : task))
        console.log(todo)
  }


  return (
    <div>
      <TaskForm addTask={addTask} />

      {tasks.map((todo) => (
        todo.isEditing ? (
          <EditTask editTask={editTodo} task={todo} />
        ) :
          <Tasks task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
      )


      )}

    </div>
  )
}

export default TaskContainer