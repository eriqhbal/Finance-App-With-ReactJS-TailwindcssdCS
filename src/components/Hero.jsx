import React from "react";

// Import Components
import Typed from "react-typed";

const Hero = () => {
   return (
      <div className="text-white">
         <div className="max-w-[800px] md:mt-[-90px] mt-[-250px] h-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl font-bold md:py-6 text-4xl">Grow with data</h1>
            <div className="flex justify-center items-center">
               <p className="md:text-5xl sm:text-4xl text-xl py-4 font-bold">Fast, Flexible Financing For</p>
               <Typed
                  className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                  strings={['BTB','BTC','SAAS']} 
                  typeSpeed={120} backSpeed={140} 
                  loop
               />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms.</p>
            <button className="bg-[#00df9a] w-[150px] rounded-md my-4 mx-auto p-3 text-black font-bold mt-10">Get Started</button>
         </div>
      </div>
   )
}

export default Hero;