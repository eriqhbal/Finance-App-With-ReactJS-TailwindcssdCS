import React from 'react'

// import assets images
import Single from '../Assets/single.png';
import Double from '../Assets/double.png';
import Triple from '../Assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto gap-8 grid md:grid-cols-3 '>
        <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300'>
          <img className='mx-auto w-20 mt-[-3rem] bg-white' src={Single} alt="/"/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up To 1 GB</p>
          </div>
          <button className=' my-6 bg-[#00df9a] text-black w-[140px] font-bold rounded-md p-2 mx-auto shadow-sm shadow-green-500 hover:scale-105 duration-200'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col rounded-lg p-4 bg-gray-100 md:my-0 my-0 hover:scale-105 duration-300'>
          <img className='mx-auto w-20 mt-[-3rem] bg-transparant' src={Double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center font-bold text-4xl'>$200</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>530 GB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up To 1.5 GB</p>
          </div>
          <button className=' my-6 bg-[#00df9a] text-black w-[140px] font-bold rounded-md p-2 mx-auto shadow-sm shadow-green-500 hover:scale-105 duration-200'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300'>
          <img className='mx-auto w-20 mt-[-3rem] bg-white' src={Triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center font-bold text-4xl'>$250</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>600 GB Storage</p>
            <p className='py-2 border-b mx-8'>5 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up To 3 GB</p>
          </div>
          <button className=' my-6 bg-[#00df9a] text-black w-[140px] font-bold rounded-md p-2 mx-auto shadow-sm shadow-green-500 hover:scale-105 duration-200'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards