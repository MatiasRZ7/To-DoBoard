import React from 'react'
import { useState } from 'react'
const Input = ({taskList, setTaskList}) => {

    const [input, setInput] = useState('')
    const handleAddTask = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      setTaskList([...taskList, { text: input, completed: false }])
      setInput('')
    }
    }
  return (
    <form className='flex flex-row items-center gap-3'>
        <input className='border rounded-lg py-1.5 px-2.5 text-lg'  type='text' placeholder='Add a task' value={input}
        onChange={(e) => 
        setInput(e.target.value)}/>
        <button className='bg-blue-400 text-white py-2 px-4 rounded-lg
        font-semibold hover:opacity-80' onClick={handleAddTask}>Add</button>
    </form>

  )
}

export default Input