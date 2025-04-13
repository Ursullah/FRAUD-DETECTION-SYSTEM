import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <div className=' flex-col  h-screen bg-white'>
      <h1 className='text-3xl font-bold bg-teal-700 text-white p-4 mb-20'>Cheque Fraud Detection</h1>

      <div className='grid grid-cols-3 sm:-cols-1 gap-4 mt-4 items-center justify-items-center justify-evenly '>
      <p className='border border-gray-100 box-border bg-white shadow-md  size-32 p-4 rounded-2xl w-96'>Total cheques scanned: 0</p>
      <p className='border border-gray-100 box-border rounded-2xl size-32 p-4 w-96 shadow-md'> % Fraud Detect</p>
      <p className='border border-gray-100 box-border  size-32 p-4 rounded-2xl w-96 shadow-md'>Average confidence: 0</p> 
  

      <div className='flex items-center justify-center'>   
      <button className='bg-teal-600 text-white px-6 py-3 rounded-md shadow hover:bg-teal-700 transition ease-in duration-200 mt-10'> UPLOAD CHEQUE </button> 
      </div>
      </div>
     <div>


      <div>
      </div>
      <h1 className='text-lg font-semibold mb-5'>Recent Cheques</h1>
      <div className='overflow-x-auto'>    makes the table scrollable on small screens
        <table className='border border-gray-300 w-full text-center'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 p-2'>Cheque #</th>
              <th className='border border-gray-300 p-2'>Account Holder</th>
              <th className='border border-gray-300 p-2'>Status</th>
              <th className='border border-gray-300 p-2'>Date</th>
              <th className='border border-gray-300 p-2'>Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-2'>12345</td>
              <td className='border border-gray-300 p-2'>John Doe</td>
              <td className='border border-gray-300 p-2'>Legit</td>
              <td className='border border-gray-300 p-2'>2/04/25</td>
              <td className='border border-gray-300 p-2' >90%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>12345</td>
              <td className='border border-gray-300 p-2'>Alice Johnso</td>
              <td className='border border-gray-300 p-2'>Fraud</td>
              <td className='border border-gray-300 p-2'>2/04/25</td>
              <td className='border border-gray-300 p-2'>70%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>12345</td>
              <td className='border border-gray-300 p-2'>Bob Smith</td>
              <td className='border border-gray-300 p-2'>Legit</td>
              <td className='border border-gray-300 p-2'>2/04/25</td>
              <td className='border border-gray-300 p-2'>95%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-2'>12345</td>
              <td className='border border-gray-300 p-2'>Charlie Brown</td>
              <td className='border border-gray-300 p-2'>Fraud</td>
              <td className='border border-gray-300 p-2'>2/04/25</td>
              <td className='border border-gray-300 p-2'>60%</td>
            </tr>
          </tbody>
        </table>
      </div>
     </div>
     <NavigationBar />
    </div>
  )
}

export default Home


// sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3