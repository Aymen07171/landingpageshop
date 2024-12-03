import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-greenbackground'>
    <div className='max-w-7xl mx-auto px-4 py-4'>
      <div className='flex justify-between items-center flex-wrap	'>
        {/* Logo */}
        <div className='flex items-center flex-wrap	'>
          <img src='/icons/logo-nav.svg' alt="Logo" className='h-12' />
          <p className=' font-lexend text-white'>RumDays</p>
        </div>
  
        {/* Navigation Menu */}
        <ul className='flex space-x-8 items-center text-white flex-wrap	'>
          <li className='hover:text-amber-600 cursor-pointer'> Home </li>
          <li className='hover:text-amber-600 cursor-pointer'> About </li>
          <li className='hover:text-amber-600 cursor-pointer'> Products </li>
          <li className='hover:text-amber-600 cursor-pointer'> Contact </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar