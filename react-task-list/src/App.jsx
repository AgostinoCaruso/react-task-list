import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap'
import { tasks } from '../moduls/tasksDB'


function App() {

  const inProgressTask = tasks.filter((ele => ele.state === "in_progress" || ele.state === "backlog"));
  const completedTask = tasks.filter((ele => ele.state === "completed"));

  console.log(inProgressTask,completedTask);
  return (
    <>
      <div>
        <h1>Task Manager</h1>
      </div>
      <div>
        <h3>Current Task ({inProgressTask.length})</h3>
      </div>
      <hr />
      <div>
        <h3>Current Task ({completedTask.length})</h3>
      </div>
    </>
  )
}

export default App
