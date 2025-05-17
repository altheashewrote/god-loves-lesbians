import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import IntroPage from './pages/IntroPage'
import About from './pages/About'
import MoreOfMe from './pages/MoreOfMe'
import TheWhy from './pages/TheWhy'
import Outro from './pages/Outro'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/IntroPage" element={<IntroPage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/MoreOfMe" element={<MoreOfMe/>}/>
        <Route path="/TheWhy" element={<TheWhy/>}/>
        <Route path="/Outro" element={<Outro/>}/>
      </Routes>
    </Router>
  )
}

export default App