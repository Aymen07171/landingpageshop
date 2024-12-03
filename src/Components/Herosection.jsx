import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-lightcreme py-6 md:py-10 px-4 md:px-8'>
      {/* Brands/Partners Section */}
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12'>
        <img 
          src="public\icons\image-1.svg" 
          alt="Brand 1"
          className='h-8 md:h-10 w-auto' 
        />
        <div className='flex items-center gap-2'>
          <img 
            src="public\icons\image-2.svg" 
            alt="Shell Logo"
            className='h-8 md:h-10 w-auto' 
          />
          <span className='font-lexend text-lg md:text-xl'>Shell</span>
        </div>
        <p className='font-Coustard font-black text-2xl md:text-3xl'>Ferrari</p>
        <img 
          src="public\icons\image-3.svg" 
          alt="Brand 3"
          className='h-8 md:h-10 w-auto' 
        />
        <img 
          src="public\icons\image-4.svg" 
          alt="Brand 4"
          className='h-8 md:h-10 w-auto' 
        />
      </div>

      {/* Hero Content Section */}
      <div className='max-w-4xl mx-auto text-center px-4 mb-12'>
        <h1 className='font-lexend text-3xl md:text-4xl lg:text-5xl text-greenbackground mb-6'>
          Welcome to Our Indie Rum Shop
        </h1>
        <div className='space-y-2 mb-8'>
          <p className='font-golos text-sm md:text-base'>
            Discover a world of exceptional rum, where flavor and tradition meet.
            Explore our selection of premium and artisanal spirits,
          </p>
          <p className='font-golos text-sm md:text-base'>
            each with its own unique story and character
          </p>
        </div>
        <button className='btn bg-greenbackground text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all'>
          Shop Now
        </button>
      </div>

      {/* Products Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4'>
        <div className='text-center'>
          <img 
            src="public\images\image-5.svg" 
            alt="Whiskey Delight"
            className='w-full h-auto max-w-sm mx-auto' 
          />
          <p className='pt-4 md:pt-5 font-medium'>Whiskey Delight</p>
        </div>
        <div className='text-center'>
          <img 
            src="public\images\image-6.svg" 
            alt="Premium Whiskey"
            className='w-full h-auto max-w-sm mx-auto' 
          />
          <p className='pt-4 md:pt-5 font-medium'>Premium Whiskey</p>
        </div>
        <div className='text-center'>
          <img 
            src="public\images\image-7.svg" 
            alt="Liquor Indulgence"
            className='w-full h-auto max-w-sm mx-auto' 
          />
          <p className='pt-4 md:pt-5 font-medium'>Liquor Indulgence</p>
        </div>
      </div>
    </div>
  )
}

export default Herosection
