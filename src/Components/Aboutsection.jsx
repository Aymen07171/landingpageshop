import React from 'react'

const Aboutsection = () => {
  return (
    <div className='flex flex-col md:flex-row w-full min-h-[600px]'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 min-h-[400px] md:min-h-full'>
        <img
          className='w-full h-full object-cover'
          src="public\images\Section 6.svg"
          alt="About section image"
        />
      </div>

      {/* Content Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 lg:p-16 gap-6 md:gap-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-lexend text-greenbackground'>
          Memorable Experiences
        </h1>

        <div className='space-y-4'>
          <h3 className='text-base md:text-lg text-gray-700'>
            Join our vibrant community of rum enthusiasts and unlock a world of exclusive benefits.
          </h3>
          <h3 className='text-base md:text-lg text-gray-700'>
            From members-only events and special offers to personalized recommendations and behind-the-scenes access, 
            our club promises to elevate your appreciation for the art of rum
          </h3>
        </div>

        <ul className='space-y-2 list-disc list-inside text-gray-700 text-base md:text-lg'>
          <li className='hover:text-greenbackground cursor-pointer transition-colors'>
            Founder's Message
          </li>
          <li className='hover:text-greenbackground cursor-pointer transition-colors'>
            Passion
          </li>
          <li className='hover:text-greenbackground cursor-pointer transition-colors'>
            Quality
          </li>
          <li className='hover:text-greenbackground cursor-pointer transition-colors'>
            Community
          </li>
        </ul>

        <button className='bg-greenbackground text-white py-3 px-6 rounded-lg w-fit 
          hover:bg-opacity-90 transition-all text-base md:text-lg
          focus:ring-2 focus:ring-offset-2 focus:ring-greenbackground'>
          Become a Member
        </button>
      </div>
    </div>
  )
}

export default Aboutsection
