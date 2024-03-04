import React from 'react';
import Input from './components/Input';
import { useState } from 'react';
import Board from './components/Board';
import { useEffect } from 'react';
function App() {
  const [taskList, setTaskList] = useState([])
  useEffect(() => {
    // Convertir todas las tareas existentes que son cadenas en objetos
    const newTaskList = taskList.map(task => typeof task === 'string' ? {text: task, completed: false} : task)
    setTaskList(newTaskList)
  }, [])
  return (
  
    <div className='px-12'>
    <div className='flex flex-col justify-center items-center py-8 gap-4'>
      <h1 className='text-xl font-semibold'>Task List</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 '>
        {taskList.map((task, index) => 
          <Board
          key={index} 
          index={index} 
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}/>
        )}
      
      </div>
    </div>
  
    
  );
}

export default App;
