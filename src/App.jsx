import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './app.css'

import Create from "./components/Create"
import Read from "./components/Read"
import Update from "./components/Update"



function App() {

  return (
    <>


      <Router>
        <div className="main">      
          <h2 className="main-header">
            React Crud Operations
          </h2>
          <div>
            <Routes>
              <Route path="/" element={<Create />} />
            </Routes>
          </div>

          <div style={{ marginTop: 10 }}>            
            <Routes>
              <Route path="/read" element={<Read />} />
            </Routes>
          </div>
          <div>
            <Routes>
              <Route path="/update" element={<Update />} />
            </Routes>
          </div>
        </div>

      </Router>
    </>


  )
}

export default App
