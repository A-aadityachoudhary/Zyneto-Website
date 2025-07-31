import React from 'react'

const BlogSection1 = () => {
  return (
    <div className='bg-black md:pb-10 flex flex-col md:flex-row px-4 pt-30 md:gap-5 md:px-15 lg:p-30 lg:pt-40 '>
      <div className='text-center flex flex-col mx-auto  md:text-left max-w-[500px]'>
        <p className='text-4xl font-bold text-white'>Your go-to destination for <span className='text-amber-600'>Insightful Blogs!</span></p>
        <p className='text-xl mt-1.5 text-gray-400'> Dive into our collection of thought-provoking content crafted to inspire, educate, and empower you on your digital journey. Whether you're looking for tips on software development, trends in AI and machine learning, or best practices in web design, our blog has something for everyone.</p>
      </div>
      <img className='size-[320px] py-10  flex mx-auto' src="https://zyneto.com/_next/image?url=%2Fassets%2FBlogHero.png&w=1920&q=75" alt="" />
    </div>
  )
}

export default BlogSection1
