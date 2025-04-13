import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar'   

const History = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const fetchHistory = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/history')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setHistory(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchHistory()
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold bg-teal-700 text-white p-4 mb-20'>Cheque Fraud Detection</h1>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {history.length > 0 ? (
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-bold mb-4'>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index} className='mb-2'>
                <strong>{item.date}:</strong> {item.status}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No history available.</p>
      )}
      <NavigationBar />
    </div>
  )
}

export default History
