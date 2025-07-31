import React from 'react'
import { CiSearch } from "react-icons/ci";

const BlogSection2 = () => {

    const blogs =[
        {
            index:"1",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2FWeb_Scraping_in_2025_031PVGS.png&w=1920&q=75",
            blogDate:"12 May 2025",
            blogName:"Web Scrapping Guide for 2025 - How it Works,Types",
            blogDescription:"Discover the ultimate Web Scraping Guide for 2025! Learn how web scraping works, its types, legality, tools like BeautifulSoup & Scrapy, and how businesses use it for data extraction, price comparison, and sentiment analysis. Stay...",
            blogType:"Web Scraping",
            blogReading:"12 min read",
            author:"Louis",
        },
        {
            index:"2",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage1.jpg&w=1920&q=75",
            blogDate:"05 May 2025",
            blogName:"Grok 3: What's New in Elon Musk's New AI?",
            blogDescription:"Grok 3, Elon Musk's latest AI from xAI, offers advanced reasoning, deep search, and a humorous touch. Learn what's new and get 9+ expert tips on how to use it effectively.",
            blogType:"Artificial Intelligence",
            blogReading:"9 min read",
            author:"Brendon",
        },
        {
            index:"3",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage3.jpg&w=1920&q=75",
            blogDate:"24 Apr 2025",
            blogName:"Everything You need to Know About Artificial Intelligence in 2025",
            blogDescription:"Discover everything about Artificial Intelligence in 2025—from its history and types to its impact on businesses. Learn how AI tools, machine learning, and deep learning are shaping the future.",
            blogType:"Artificial Intelligence",
            blogReading:"10 min read",
            author:"Brendan",
        },
        {
            index:"4",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage2.jpg&w=1920&q=75",
            blogDate:"21 Mar 2025",
            blogName:"UX/UI Design in 2025: Trends, AI-Driven Tools, and Best Practices for Digital...",
            blogDescription:"Explore the future of UI/UX design in 2025. Learn about emerging trends, AI-driven tools, and proven strategies to create seamless digital experiences.",
            blogType:"Designing",
            blogReading:"20 min read",
            author:"Benson",
        },
        {
            index:"5",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2FWeb_development.jpg&w=1920&q=75",
            blogDate:"12 Mar 2025",
            blogName:"Innovative Web Development 101 in 2025: Trends,Types...",
            blogDescription:"Discover what to know about the innovative web development trends, processes, and services in 2025. This new approach encompasses front-end design, back-end solutions, and database management.",
            blogType:"Web Development",
            blogReading:"36 min read",
            author:"Helen",
        },
        {
                index:"6",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2FWeb_Scraping_in_2025_031PVGS.png&w=1920&q=75",
            blogDate:"12 May 2025",
            blogName:"Web Scrapping Guide for 2025 - How it Works,Types",
            blogDescription:"Discover the ultimate Web Scraping Guide for 2025! Learn how web scraping works, its types, legality, tools like BeautifulSoup & Scrapy, and how businesses use it for data extraction, price comparison, and sentiment analysis. Stay...",
            blogType:"Web Scraping",
            blogReading:"12 min read",
            author:"Louis",
        },
        {
            index:"7",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage1.jpg&w=1920&q=75",
            blogDate:"05 May 2025",
            blogName:"Grok 3: What's New in Elon Musk's New AI?",
            blogDescription:"Grok 3, Elon Musk's latest AI from xAI, offers advanced reasoning, deep search, and a humorous touch. Learn what's new and get 9+ expert tips on how to use it effectively.",
            blogType:"Artificial Intelligence",
            blogReading:"9 min read",
            author:"Brendon",
        },
        {
            index:"8",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage3.jpg&w=1920&q=75",
            blogDate:"24 Apr 2025",
            blogName:"Everything You need to Know About Artificial Intelligence in 2025",
            blogDescription:"Discover everything about Artificial Intelligence in 2025—from its history and types to its impact on businesses. Learn how AI tools, machine learning, and deep learning are shaping the future.",
            blogType:"Artificial Intelligence",
            blogReading:"10 min read",
            author:"Brendan",
        },
        {
            index:"9",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2Fimage2.jpg&w=1920&q=75",
            blogDate:"21 Mar 2025",
            blogName:"UX/UI Design in 2025: Trends, AI-Driven Tools, and Best Practices for Digital...",
            blogDescription:"Explore the future of UI/UX design in 2025. Learn about emerging trends, AI-driven tools, and proven strategies to create seamless digital experiences.",
            blogType:"Designing",
            blogReading:"20 min read",
            author:"Benson",
        },
        {
            index:"10",
            imageUrl:"https://zyneto.com/_next/image?url=https%3A%2F%2Fzyneto.s3-accelerate.amazonaws.com%2Fmedia%2Fblog%2Fpost%2FWeb_development.jpg&w=1920&q=75",
            blogDate:"12 Mar 2025",
            blogName:"Innovative Web Development 101 in 2025: Trends,Types...",
            blogDescription:"Discover what to know about the innovative web development trends, processes, and services in 2025. This new approach encompasses front-end design, back-end solutions, and database management.",
            blogType:"Web Development",
            blogReading:"36 min read",
            author:"Helen",
        },
    ]

  return (
    <div className='mx-4 my-8 lg:mx-24 lg:mt-15'>
      <div className='flex flex-col lg:flex-row lg:gap-20'>
        <div className=' lg:max-w-[70vh]  xl:max-w-[80vh]' >
            <input type="text" name="" className='px-4  mb-4 py-4 bg-gray-100  text-lg  outline-none border border-gray-200 rounded-xl w-full ' placeholder="Search your blog" id="" />
            <div className='flex flex-col gap-5'>
                {blogs.map((blog)=>(
                    <div key={blog.id} className='p-4   rounded-lg shadow-sm bg-white'>
                        <img src={blog.imageUrl}  className='mb-2' alt="" />
                        <p className='mb-4 text-lg'>{blog.blogDate}</p>
                        <p className='mb-4 hover:text-amber-600 cursor-pointer text-3xl font-bold'>{blog.blogName}</p>
                        <p className='text-lg mb-4'>{blog.blogDescription}</p>
                        <div className='flex gap- justify-between shrink-0 flex-nowrap'>
                            <button className='border shrink-0 flex-nowrap border-gray-400 px-1 py-1 rounded hover:bg-amber-600 hover:text-white'>{blog.blogType}</button>
                            <p className='flex  items-center gap-1'> <img className='size-5' src="https://zyneto.com/_next/image?url=%2Fassets%2Fbookreadbloglist.svg&w=48&q=75" alt="" /> {blog.blogReading}</p>
                            <p className='flex  items-center gap-1'> <img className='size-5' src="https://zyneto.com/_next/image?url=%2Fassets%2Fauthorbloglist.svg&w=48&q=75" alt="" /> {blog.author}</p>

                        </div>
                        </div>
                ))}
            </div>

        </div>
        <div className='lg:mt-15'>
            <div className='p-5 my-8 border border-amber-600 cursor-pointer rounded'>
                <p className='text-xl mb-3 font-bold'>Relevant Keywords</p>
                <div className='flex gap-2 flex-wrap shrink-0'>
                    <button className='p-2 hover:text-white hover:bg-amber-600 border flex-wrap  shrink-0 border-amber-600 cursor-pointer rounded'>Artificial Intelligence</button>
                    <button className='p-2 hover:text-white hover:bg-amber-600 border shrink-0 border-amber-600 cursor-pointer rounded'>Devops</button>
                    <button className='p-2 hover:text-white hover:bg-amber-600 border shrink-0 border-amber-600 cursor-pointer rounded'>Designing</button>
                    <button className='p-2 hover:text-white hover:bg-amber-600 border shrink-0 border-amber-600 cursor-pointer rounded'>Web Scrapping</button>
                    <button className='p-2 hover:text-white hover:bg-amber-600 border shrink-0 border-amber-600 cursor-pointer rounded'>Web Development</button>

                </div>
                 </div>
                
                <div className='p-5  border border-amber-600 cursor-pointer rounded'>
                    <p className='font-bold text-xl mb-4'>Popular Blogs</p>
                        <div className='flex flex-col gap-5'>
                        {blogs.map((blog)=>(
                            <div key={blog.id} className='p-2 flex flex-row gap-2  rounded-lg hover:bg-gray-100 bg-white'>
                                <div>
                                    <img src={blog.imageUrl}  className='w-[80px] h-[60px]' alt="" />
                                </div>
                                <div>
                                <div className='flex justify-between'>
                                    <p className='mb-2 text-sm'>{blog.blogDate}</p>
                                    <p className='mb-2 text-sm'>{blog.blogReading}</p>
                                </div>
                                <p className='mb-4 hover:text-amber-600 cursor-pointer text-sm font-semibold'>{blog.blogName}</p>
                                
                                
                                </div>
                                
                                
                                </div>
                        ))}
            </div>

                </div>
     
        </div>

      </div>
    </div>
  )
}

export default BlogSection2








