import React, { useEffect, useState } from 'react'
import left from '../assets/left_arrow.svg'
import right from '../assets/right_arrow.svg'
import img1 from '../assets/project_img_1.jpg'
import img2 from '../assets/project_img_2.jpg'
import img3 from '../assets/project_img_3.jpg'
import img4 from '../assets/project_img_4.jpg'
import img5 from '../assets/project_img_5.jpg'
import img6 from '../assets/project_img_6.jpg'

const projectsData =[
    {
        id:"1",
        title:"Skyline Haven",
        price:"$2,50,000 ",
        location:"California",
        image:img1,
    },
    {
        id:"2",
        title:"Vista Verde",
        price:"$2,50,000",
        location:"San Francisco",
        image:img2,
    },
    {
        id:"3",
        title:"Serenity Suites",
        price:"$2,50,000 ",
        location:"Chicago",
        image:img3,
    },
    {
        id:"4",
        title:"Central Square",
        price:"$2,50,000",
        location:" Los Angeles",
        image:img4,
    },
    {
        id:"5",
        title:"Vista Verde",
        price:"$2,50,000",
        location:"San Francisco",
        image:img5,
    },
    {
        id:"6",
        title:"Serenity Suites",
        price:"$2,50,000",
        location:" Chicago",
        image:img6,
    }
]

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const nextProject = ()=> {
        setCurrentIndex((prevIndex) => (prevIndex+1) % projectsData.length)
    }
    const prevProject = ()=> {
        setCurrentIndex((prevIndex) => prevIndex === 0  ? projectsData.length - 1 :  prevIndex - 1)
    }
    useEffect(()=> {
        const updateCardsToShow = ()=> {
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();
            window.addEventListener('resize', updateCardsToShow);
            return()=> window.addEventListener('resize', updateCardsToShow);
        
    },[])

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>

        {/* Text */}
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Projects
            <span className='underline underline-offset-4 decoration-1 font-light ml-2'>
                Completed
            </span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

        {/* Slider Buttons */}
        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject}
                    className='p-3 bg-gray-200 rounded mr-2' 
                    aria-label='Previous Project'>
                <img src={left} alt="" />
            </button>
            <button onClick={nextProject}
                    className='p-3 bg-gray-200 rounded mr-2' 
                    aria-label='Next Project'>
                <img src={right} alt="" />
            </button>
        </div>

        {/* Project Slider Container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow }%)`}}
            >                
                {
                    projectsData.map((project) => (
                        <div key={project.id} 
                            className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} 
                                 alt={project.title} 
                                 className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {project.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'>|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects