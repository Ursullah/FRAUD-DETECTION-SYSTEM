import React from 'react'
  import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [adminData, setAdminData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchAdminData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setAdminData(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchAdminData()
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold bg-teal-700 text-white p-4 mb-20'>Cheque Fraud Detection</h1>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {adminData.length > 0 ? (
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-bold mb-4'>Admin Data</h2>
          <ul>
            {adminData.map((item, index) => (
              <li key={index} className='mb-2'>
                <strong>{item.date}:</strong> {item.status}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No admin data available.</p>
      )}
    </div>
  )
}

export default Admin
