import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Hero'>
        <Navbar />
        <div className='flex items-center flex-col mx-auto'>
          <h2 className='mx-auto text-white text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-center outfit'>
            Explore homes that fit your dreams
          </h2>

          {/* Button */}
          <div className='space-x-6 mt-16'>
            <a href="" className='border border-white px-8 py-3 text-white outfit rounded-sm'>
              Projects
            </a>
            <a href="" className='bg-blue-500 px-8 py-3 text-white outfit rounded-sm'>
              Contact Us
            </a>
          </div>
        </div>  
    </div>
    </>
  )
}

export default Hero