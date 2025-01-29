import React from 'react'
import profile1 from '../assets/profile_img_1.png'
import profile2 from '../assets/profile_img_2.png'
import profile3 from '../assets/profile_img_3.png'
import rateImg from '../assets/star_icon.svg'

const testimonialsData = [
    {
        id:"1",
        name:"Donald Jackman",
        title:"Marketing Manager",
        image:profile1,
        alt:"Portratit of Donald Jackman",
        rating:"3",
        text:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        id:"2",
        name:"Richard Nelson",
        title:"UI/UX Designer",
        image:profile2,
        alt:"Portratit of Richard Nelson",
        rating:"4",
        text:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        id:"3",
        name:"James Washington",
        title:"Co-Founder",
        image:profile3,
        alt:"Portratit of James Washington",
        rating:"5",
        text:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
]

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Customer
            <span className='underline underline-offset-4 under decoration-1 font-light ml-2'>
                Testimonials
            </span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>
            Real Stories from Those  Who Found Home with Us
        </p>

        <div className='flex flex-wrap justify-center gap-8'>
            {
                testimonialsData.map((data)=> (
                    <div key={data.id} 
                        className='max-w-[340px] shadow-xl rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' 
                            src={data.image} alt={data.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>
                            {data.name}
                        </h2>
                        <p className='text-gray-500 mb-4 text-sm'>
                            {data.title}
                        </p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {
                                Array.from({length: data.rating}, (data)=> (
                                    <img src={rateImg} alt="" />
                                ))
                            }
                        </div>
                        <p className='text-gray-600'>
                            {data.text}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials