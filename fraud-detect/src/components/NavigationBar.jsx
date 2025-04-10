import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className=' space-x-15 mt-4'>
      <Link to="/upload" className="text-lg font-bold text-red-600 rounded-lg px-3 py-2 hover:text-underline">Upload</Link>
      <Link to="/history" className="text-lg font-bold text-red-600 rounded-lg px-3 py-2">History</Link> 
      <Link to="/admin" className="text-lg font-bold text-red-600 rounded-lg px-3 py-2 ">Admin</Link>
     </nav>
  )
}

export default NavigationBar

