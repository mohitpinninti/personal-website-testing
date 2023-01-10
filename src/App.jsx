import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Routes } from 'react-router'
import ReactHome from './components/ReactHome'
import ThreeJSModelPlaceholder from './components/ThreeJSModelPlaceholder'
import HomePageTesting from './components/HomePageTesting'
import HomePage from './components/HomePage'
import ModelHolder from './components/3DModel'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={
              <>
                {/* <ModelHolder /> */}
                <ThreeJSModelPlaceholder />
                <HomePage />
                <ReactHome />
              </>
            } />
            <Route path="/testing" element={
              <>
                <HomePageTesting />
              </>
            } />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
