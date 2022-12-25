import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Routes } from 'react-router'
import ReactHome from './components/ReactHome'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<ReactHome />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
