import React from 'react';
import banner from "../assets/HeroBanner.jpg"
const HeroBanner = () => {
  return (
    <div>
        <div className='bg-gray-10 lg:pt-24 pt-16'> 
        <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-20 bg-cover bg-center h-[530px] md:h-[500px] mt-8' style={{backgroundImage:`url(${banner})`, backgroundPosition:"top"}}>
          <div className='absolte inset-0 bg-black md:rounded-2xl bg-opacity-10 flex items-center justify-center mt-12'>
          <div className='text-center text-white px-4 mt-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Discover Your Style</h1>
                <p className='text-lg md:text-xl mb-6'>Shop the latest trends and find your perfect look</p>
                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duaration-300'>Shop Now</button>
          </div>
          </div>
        </div>

        </div>
    </div>
  )
}
  
export default HeroBanner