import React from 'react'

const MultiBanner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xlmx-auto'>
       {/* firstbanner*/}
       <div className='relative h-[250px]'>
       <img src="https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?cs=srgb&dl=pexels-mart-production-7679656.jpg&fm=jpg&_gl=1*19sdki6*_ga*MTA2ODQ2OTMyNS4xNzM0MDI1MTAx*_ga_8JE65Q40S6*MTczNDAyNTEwMC4xLjEuMTczNDAyNTI2MS4wLjAuMA.." alt="New Arrivals" className='w-full object-cover rounded-lg shadow-lg'/>
        <div className='absolute inset-0 bg-yellow-500 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
            <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
            <button className='mt-2 text-green-800 px-3 py-1  hover:bg-gray-200 rounded-md shadow'>Discover</button>
       </div>
        {/* secondbanner*/}
       <div className='relative h-[250px]'>
       <img src="" alt="Season Sale" className='w-full object-cover rounded-lg shadow-lg'/>
        <div className='absolute inset-0 bg-yellow-500 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
            <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
            <p className='text-white my-2 text-lg'>Up to 70% offer</p>
            <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
        </div>
       </div>
        {/* thirdbanner*/}
       <div className='relative h-[250px] col span-1 sm:col-span-2'>
       <img src="" alt="Season Sale" className='w-full object-cover rounded-lg shadow-lg'/>
        <div className='absolute inset-0 bg-yellow-500 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
            <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
            <p className='text-white my-2 text-lg'>Up to 70% offer</p>
            <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
        </div>
        </div>
        </div>
       </div>
       </div>
  )
}

export default MultiBanner