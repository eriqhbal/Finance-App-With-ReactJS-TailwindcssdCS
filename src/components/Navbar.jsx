import React, {useState} from 'react'
import { BiMenu, BiX } from 'react-icons/bi'

const navbar = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [nav, setNav] = useState(true);

   const handleNav = () => {
      setNav(!nav); 
   }

   return (
      <div className='flex  justify-between items-center h-20 px-4 max-w-[790px] mx-auto text-white'>
         <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Finance</h1>

         <ul className='hidden md:flex'>
            <li className='p-4'> Home</li>
            <li className='p-4'> Company </li>
            <li className='p-4'> Resources </li>
            <li className='p-4'> About </li>
            <li className='p-4'> Contact </li>
         </ul>

         <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <BiX size={35}/> : <BiMenu size={35}/>}
         </div>

         
         <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Finance</h1>
            <ul className=' uppercase p-4'>
               <li className='p-4 border-b border-gray-600'> Home</li>
               <li className='p-4 border-b border-gray-600'> Company </li>
               <li className='p-4 border-b border-gray-600'> Resources </li>
               <li className='p-4 border-b border-gray-600'> About </li>
               <li className='p-4'> Contact </li>
            </ul>
         </div>
      </div>
   )
}

export default navbar