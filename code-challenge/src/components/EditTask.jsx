import React, {useState} from 'react'

const EditTask = ({editTask, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTask(value, task.id);

        
    };

    return (
        <form className='w-full max-w-sm flex-1 mx-auto my-4' onSubmit={handleSubmit}>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input type='text' onChange={(e) => setValue(e.target.value)} value = {value} placeholder='Editar la tarea' className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' id='username'></input>
                <button type='submit' className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'>Editar</button>
            </div>
        </form>
    )
}

export default EditTask