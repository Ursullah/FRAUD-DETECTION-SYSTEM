import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Upload from './components/Upload'
import History from './components/History'
import Admin from './components/Admin'
// import LoginRegister from './components/LoginRegister'

const App = () => {
  return (
   <>
    <Router>
      <Routes className="flex flex-col items-center justify-center h-screen">
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/history" element={<History />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<LoginRegister />} /> */}
      </Routes>
    </Router>
   </>
  )
}

export default App
