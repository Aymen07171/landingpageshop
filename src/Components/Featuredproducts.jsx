import React from 'react'

const Featuredproducts = () => {
  return (
    <div className="w-full">
      {/* First section */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px]">
        <img
          className='w-full h-full object-cover absolute inset-0'
          src="/images/Section 9.svg"
          alt="Hero background"
        />
        {/* Text overlay */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-10 pt-20 md:pt-32">
          <h1 className='font-lexend text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 md:pb-10 font-bold max-w-2xl'>
            Elevate Your <br className="hidden sm:block" />
            Sipping Experience
          </h1>
          <button className='btn-secondary px-6 py-3 bg-greenbackground text-white rounded-lg hover:bg-opacity-90 transition-all'>
            Join Now
          </button>
        </div>
      </div>

      {/* Second section */}
      <div className="w-full">
        <img  
          className='w-full h-full object-cover' 
          src="public\images\section-3.svg" 
          alt="Featured section" 
        />
      </div>
    </div>
  )
}

export default Featuredproducts
