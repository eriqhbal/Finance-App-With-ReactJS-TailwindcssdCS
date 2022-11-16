import React from 'react'

// import Package React-Icons
import { IoLogoFacebook, IoLogoLinkedin, IoLogoWhatsapp, IoLogoYoutube, } from 'react-icons/io'

function Footer() {
   return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
         <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>EQfinance</h1>
            <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='md:w-[75%] flex justify-between my-6'>
               <IoLogoFacebook size={30} />
               <IoLogoLinkedin size={30} />
               <IoLogoWhatsapp size={30} />
               <IoLogoYoutube size={30} />
            </div>
         </div>
         <div className='flex justify-between lg:col-span-2 mt-6'>
            <div>
               <h6 className='font-medium text-gray-400 '>Solutions</h6>
               <ul>
                  <li className='py-2 text-sm'>Analytics</li>
                  <li className='py-2 text-sm'>Marketing</li>
                  <li className='py-2 text-sm'>Commerce</li>
                  <li className='py-2 text-sm'>Insights</li>
               </ul>
            </div>
            <div>
               <h6 className='font-medium text-gray-400 '>Support</h6>
               <ul>
                  <li className='py-2 text-sm'>Pricing</li>
                  <li className='py-2 text-sm'>Documentation</li>
                  <li className='py-2 text-sm'>Guides</li>
                  <li className='py-2 text-sm'>API Solutions</li>
               </ul>
            </div>
            <div>
               <h6 className='font-medium text-gray-400 '>Company</h6>
               <ul>
                  <li className='py-2 text-sm'>About</li>
                  <li className='py-2 text-sm'>Blogs</li>
                  <li className='py-2 text-sm'>Jobs</li>
                  <li className='py-2 text-sm'>Career</li>
               </ul>
            </div>
            <div>
               <h6 className='font-medium text-gray-400 '>Legal</h6>
               <ul>
                  <li className='py-2 text-sm'>Claim</li>
                  <li className='py-2 text-sm'>Policy</li>
                  <li className='py-2 text-sm'>Terms</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Footer;