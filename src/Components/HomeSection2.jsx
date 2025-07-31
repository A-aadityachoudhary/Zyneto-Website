import React from 'react'

const HomeSection2 = () => {
  return (
    <div className='lg:mx-15 xl:mx-35 bg-white'>
      <div className='flex flex-col justify-center md:flex-row gap-10 lg:gap-20 xl:gap-50 mt-12 lg:mt-20 mx-4 '>
        <div>
            <p className='text-4xl mb-2 md:text-6xl font-bold'>Why Partner with <span className='text-amber-600'>Zyneto Global?</span></p>
            <p className='text-gray-600 text-xl'>At Zyneto Global, we focus on providing you with top-notch web development and software development services that propel your business forward. By choosing us, you'll get numerous benefits that exceed the usual services, like exceptional customer support, which will help your business thrive and grow faster.</p>
      </div>
      <img className='size-[60%] md:size-[40%] lg:size-[30%] flex mx-auto' src="https://zyneto.com/_next/image?url=%2Fassets%2Fworkimg.webp&w=1920&q=75" alt="" />
        </div>

        {/* 4 dives !! */}
        <div className='flex flex-col lg:flex-row mx-4 mt-20  gap-5 md-gap-20 lg:gap-30'>
            <div>
                <div className='flex flex-row gap-3'><span><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fcreative.svg&w=1920&q=75" alt="" /></span> <span className='text-gray-800 text-2xl font-semibold'>Creative Team</span></div>
                <p className='text-gray-600 text-xl ml-13 mr-8'>We carefully design and implement state-of-the-art software solutions to ensure longevity, scalability, and adaptability to future changes.</p>
            </div>
            <div>
                <div className='flex flex-row gap-3'><span><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fcreative.svg&w=1920&q=75" alt="" /></span> <span className='text-gray-800 text-2xl font-semibold'>Creative Team</span></div>
                <p className='text-gray-600 text-xl ml-13 mr-8'>We carefully design and implement state-of-the-art software solutions to ensure longevity, scalability, and adaptability to future changes.</p>
            </div>
            </div>
        <div className='flex flex-col lg:flex-row mx-4 mt-10 mb-20 gap-5 md-gap-20 lg:gap-30'>
            <div>
                <div className='flex flex-row gap-3'><span><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fcreative.svg&w=1920&q=75" alt="" /></span> <span className='text-gray-800 text-2xl font-semibold'>Creative Team</span></div>
                <p className='text-gray-600 text-xl ml-13 mr-8'>We carefully design and implement state-of-the-art software solutions to ensure longevity, scalability, and adaptability to future changes.</p>
            </div>
            <div>
                <div className='flex flex-row gap-3'><span><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fcreative.svg&w=1920&q=75" alt="" /></span> <span className='text-gray-800 text-2xl font-semibold'>Creative Team</span></div>
                <p className='text-gray-600 text-xl ml-13 mr-8'>We carefully design and implement state-of-the-art software solutions to ensure longevity, scalability, and adaptability to future changes.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2
