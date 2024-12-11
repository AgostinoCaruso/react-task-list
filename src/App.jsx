import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { header } from '../components/header'
import { mainContent } from '../components/mainContent'

function App() {

  return (
    <>
      {header}
      <div className=" container">
      
        {mainContent("progress")}
        <hr />
        {mainContent("completed")}
   
      </div>

    </>
  )
}

export default App
