import React from 'react'

// Import Assets Image 
import Laptop from '../Assets/laptop.jpg';


function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
         <div className='my-2 flex flex-col justify-center'>
              <p className="text-[#00df9a] font-bold md:text-2xl">DATA ANALYTICS DASHBOARD</p>
              <h1 className='font-bold text-2xl md:text-3xl'>Manage Data Analytics Centrally</h1>
              <p className='font-bold pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinces. </p>
              <button className='md:my-5 my-3 bg-stone-800 text-[#00df9a] w-[140px] font-medium rounded rounded-md p-2 mx-auto md:mx-0 shadow-sm shadow-green-500 mt-3'>Get Started</button>
         </div>
         
      </div>
    </div>
  )
}

export default Analytics