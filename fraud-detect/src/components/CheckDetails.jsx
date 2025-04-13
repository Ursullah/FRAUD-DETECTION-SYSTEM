import React from 'react'

const CheckDetails = () => {
    const [checkDetails, setCheckDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchCheckDetails = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/check-details')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setCheckDetails(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchCheckDetails()
    }, [])  

    return (
       <>
       <div>
              <h1 className='text-3xl font-bold bg-teal-700 text-white p-4 mb-20'>Cheque Fraud Detection</h1>
              {loading && <p>Loading...</p>}
              {error && <p className='text-red-500'>{error}</p>}
              {checkDetails && (
                <div className='bg-white shadow-md rounded-lg p-6'>
                     <h2 className='text-xl font-bold mb-4'>Check Details</h2>
                     <ul>
                          {Object.entries(checkDetails).map(([key, value]) => (
                            <li key={key} className='mb-2'>
                                 <strong>{key}:</strong> {value}
                            </li>
                          ))}
                     </ul>
                </div>
              )}
       </div>
       </>
    )
}

export default CheckDetails
