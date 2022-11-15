import React from 'react'

function Newslatter() {
   return (
      <div className='text-white w-full py-16 px-4'>
         <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='col-span-2 my-6'>
               <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Want tips & tricks to optimize your flow ?</h1>
               <p>sign up to our newslatter and stay up to date</p>
            </div>
            <div className='my-4'>
               <div className='flex flex-col sm:flex-row p-3 items-center justify-between w-full'>
                  <input type="email" placeholder='Input Email' className=' p-3 flex w-full rounded-md text-black'/>
                  <button className='w-[200px] bg-[#00df9a] text-black rounded-md p-2 ml-4 py-3 font-bold my-5'>Notify Me</button>
               </div>
               <p className='w-[80%] mx-auto md:mx-3'>We care about the protection of your data. Read out <span className='text-[#00df9a] underline '>privacy policy.</span></p>
            </div>
         </div>
      </div>
   )
}

export default Newslatter