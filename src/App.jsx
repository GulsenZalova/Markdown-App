import EditNote from './routersamples/EditNote'
import Markdown from './routersamples/Markdown'
import { Link, Route, Routes } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import './App.css'

function App() {
  const [markText,setMarkText]=useState("")
  return (
    <div className="App">
      
        <div>
      <header>
        <ul>
          <li><Link to="/">EditNode</Link></li>
          <li><Link to="/markdown">Markdown</Link></li>
        </ul>
      </header>
      
      <div>

        {
          <Routes>
            <Route element={<EditNote markText={markText} setMarkText={setMarkText}/>} path="/"></Route>
            <Route element={<Markdown  markText={markText} setMarkText={setMarkText}/>} path="/markdown"></Route>
          </Routes>
        }
      </div>
    </div>
    </div>
  )
}
export default App
