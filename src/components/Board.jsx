import React, { useState } from 'react'

const Board = ({task, index, taskList, setTaskList}) => {
    const [editMode, setEditMode] = useState(false);
    const [currentTask, setCurrentTask] = useState({ ...task });

    const handleDelete = () => {
        const newTaskList = taskList.filter((item, itemIndex) => itemIndex !== index);
        setTaskList(newTaskList);
    }

    const handleComplete = () => {
        const newTaskList = [...taskList];
        newTaskList[index].completed = !newTaskList[index].completed;
        setTaskList(newTaskList);
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleUpdate = () => {
        const newTaskList = [...taskList];
        newTaskList[index] = currentTask;
        setTaskList(newTaskList);
        setEditMode(false);
    }

    return (
        <>
        <div className='max-w-md rounded-xl flex flex-col items-center justify-center border
        text-center text-lg pt-4 pb-4'>
        {editMode ? (
            <input className='rounded-lg' value={currentTask.text} onChange={e => setCurrentTask({ ...currentTask, text: e.target.value })} />
        ) : (
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
        )}
        <button onClick={handleComplete} className='bg-green-500 text-white rounded-lg py-1 px-2 mt-4'>Complete</button>
        {editMode ? (
            <button onClick={handleUpdate} className='bg-blue-500 text-white rounded-lg py-1 px-2 mt-4'>Update</button>
        ) : (
            <button onClick={handleEdit} className='bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4'>Edit</button>
        )}
        <button onClick={handleDelete} className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4'>Delete</button>
        </div>
        </>
    )
}

export default Board