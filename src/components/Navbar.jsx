import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import menuIcon from '../assets/menu_icon.svg'
import crossIcon from '../assets/cross_icon.svg'

const menu = [
    {id:1, name:"Home", href:"#"},
    {id:2, name:"About", href:"#About"},
    {id:3, name:"Projects", href:"#Projects"},
    {id:4, name:"Testimonials", href:"#Testimonials"}
]

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(()=> {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return()=> {
            document.body.style.overflow = 'auto'
        };
    },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10' id='Hero'>
        <div className='container mx-auto px-4 py-6 md:px-20 lg:px-32 flex justify-between items-center bg-transparent'>
            {/* Nav Logo */} 
            <div className='flex items-center'>
                <img src={logo} alt="" />
            </div>

            {/* Nav Menu */}
            <div>
                <div className='hidden gap-7 md:flex text-white'>
                    {
                        menu.map((name) => (
                            <div key={name.id}>
                                <a href={name.href} className='hover:text-gray-400 cursor-pointer'>
                                    {name.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Sign Up Button */}
            <button className='cursor-pointer hidden md:block bg-white rounded-full px-8 py-2'>
                Sign up
            </button>
            <img onClick={()=> setShowMobileMenu(true)} className='md:hidden w-7' src={menuIcon} alt="" />
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false)} src={crossIcon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium bg-white transition-all'>
                <a onClick={()=> setShowMobileMenu(false)} href="#Hero" className='px-4 py-2 rounded-full inline-block'>
                    Home
                </a>
                <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>
                    About
                </a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>
                    Projects
                </a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>
                    Testimonial
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar