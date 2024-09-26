import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import DeliverablesList from './pages/DeliverablesList'
import DeliverableDetail from './pages/DeliverableDetail'
import './App.css'

function App () {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<DeliverablesList/>}/>
            <Route path="/deliverable/:id" element={<DeliverableDetail/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App