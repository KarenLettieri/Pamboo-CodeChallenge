import React, {useState} from 'react'
import TaskForm from './TaskForm'
import {v4 as uuidv4} from 'uuid';

uuidv4();

const TaskContainer = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = todo => {
    setTasks([...tasks, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(tasks)
  }

  return (
    <div>
        <TaskForm addTask = {addTask} />
    </div>
  )
}

export default TaskContainer