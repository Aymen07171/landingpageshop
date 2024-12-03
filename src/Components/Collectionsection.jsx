import React from 'react'

const Collectionsection = () => {
  return (
    <div className='bg-[#F9F0E3] pt-[20px]'>
      <div className='text-center p-5'>
        <p className='text-gray-600 p-5'>Exclusive Offers</p>
        <h1 className='font-lexend text-6xl p-5 '>Members-Only Club</h1>
        <p>Unlock exclusive access to our members-only club, where you'll enjoy special offers, invitations to </p>
        <p className='pb-[50px]'>private events, and the opportunity to connect with fellow rum enthusiasts</p>
        <button className='btn-third '>Sign Up</button>
      </div>

      <div>

        <div className='flex flex-wrap justify-around pt-[40px]'>

        <div >
          <img src="public\images\image-9.svg" alt="" />
          <p>rum-the-rum.svg</p>
        </div>

        <div>
          <img src="public\images\image-10.svg" alt="" />
          <p>rum-rum-rum-rum.svgh</p>
        </div>

        </div>


      </div>
    </div>
  )
}

export default Collectionsection