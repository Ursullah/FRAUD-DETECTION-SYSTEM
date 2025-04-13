import React, { useState } from 'react'

const Upload = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
    setLoading(false);
  }

  const handleFileUpload = async () => {
    if(!file){
      setError("Select a file to uplaod");
      return;
    }
    setLoading(true);
    try {
    } catch (err) {
      setError("Error uploading file");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1 className='text-3xl font-bold bg-teal-700 text-white p-4 mb-20'>Cheque Fraud Detection</h1>
      <div className='flex items-center justify-center'>
        <input
         type="file" 
         onChange={handleFileChange} 
         className='border border-gray-300 rounded-md p-2 ' />
        <button 
        onClick={handleFileUpload} 
        className='bg-teal-600 text-white px-6 py-3 rounded-md shadow hover:bg-teal-700 transition ease-in duration-200 mt-10'>
          UPLOAD CHEQUE</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Upload
