import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { tasks } from '../moduls/tasksDB'


function App() {

  const inProgressTask = tasks.filter((ele) => ele.state === "in_progress" || ele.state === "backlog");
  const completedTask = tasks.filter((ele) => ele.state === "completed");

  //console.log(inProgressTask, completedTask);
  return (
    <>
        <header className=' text-black p-3'>
          <h2 className=' fw-bolder container'>Task Manager</h2>
        </header>
      <div className=" container">

        <div className='p-3'>
          <h3 className=' pb-2 fw-bolder'>Current Tasks ({inProgressTask.length})</h3>
          <ul >
            {inProgressTask.map((task) =>
              <li key={task.id}>
                <h5 className=' fw-bolder py-1'>{task.title} <span className={`status ${task.state}`}> {task.state}</span></h5>
                <p>Priority: {task.priority}</p>
                <p>Est. time: {task.estimatedTime} mins</p>
              </li>
            )}
          </ul>
        </div>

        <hr />

        <div className='p-3'>
          <h3 className=' pb-2 fw-bolder'>Completed Tasks ({completedTask.length})</h3>
          <ul>
            {completedTask.map((task) =>
              <li key={task.id}>
                <h5 className=' fw-bolder py-1'>{task.title} <span className={`status ${task.state}`}> {task.state} </span></h5>
                <p>Priority: {task.priority} </p>
                <p>Est. time: {task.estimatedTime} </p>
              </li>
            )}
          </ul>
        </div>

      </div>

    </>
  )
}

export default App
