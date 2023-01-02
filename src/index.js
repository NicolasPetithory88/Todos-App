import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from './pages/About'
import NotMatch from './pages/NotMatch'
//stylesheet
import "./functionBased/App.css"
//Rooter
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
<React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoContainer />}></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='*' element={<NotMatch />}></Route>            
        </Routes>         
      </BrowserRouter>        
    </React.StrictMode>,
  document.getElementById("root")
)