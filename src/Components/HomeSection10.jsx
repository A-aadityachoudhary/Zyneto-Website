import React from 'react'

const HomeSection10 = () => {
  return (
    <div className='bg-black overflow-hidden'>
      <div className='py-10 px-4 md:p-20 mb-10 flex flex-col  md:flex-row flex-nowrap md:gap-10'>
      <div>
        <p className='text-4xl font-bold text-white flex-nowrap shrink-0 mb-2'>Get In <span className='text-amber-600'>Touch</span></p>
        <p className='text-white text-xl mb-3 shrink-0 flex-nowrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, velit?</p>
        <img className='size-[300px] md:size-[400px] shrink-0 flex flex-nowrap mx-auto' src="https://zyneto.com/_next/image?url=%2Fassets%2Fcontact_us.webp&w=1920&q=75" alt="" />
      </div>
      <div>
        <form action="">
            <div className='mt-4'>
                <label htmlFor="" className='text-white '>Full Name</label>
                <input type="text" placeholder='John Doe' className='rounded-xl w-full mt-1 bg-white p-3 border-none outline-none' name="" id="" />
            </div>
            <div className='mt-5'>
                <label htmlFor="" className='text-white'>Email</label>
                <input type="email" placeholder='johndoe@example.com' className='rounded-xl w-full mt-1 bg-white p-3 border-none outline-none' name="" id="" />
            </div>
            <div className='mt-5'>
                <label htmlFor="" className='text-white'>Phone</label>
                <input type="number" placeholder='+1007433XXX' className='rounded-xl w-full mt-1 bg-white p-3 border-none outline-none' name="" id="" />
            </div>
            <div className='mt-5'>
                <label htmlFor="" className='text-white'>Subject</label>
                <input type="text" placeholder='Request for a demo' className='rounded-xl w-full mt-1 bg-white p-3 border-none outline-none' name="" id="" />
            </div>
            <div className='mt-5'>
                <label htmlFor="" className='text-white'>Message</label>
                <input type="text" placeholder='Please type your message here...' className='rounded-xl w-full xl:w-xl   min-h-[150px] bg-white  border-none outline-none ' name="" id="" />
            </div>
            <div className='mt-5 px-4 flex justify-between   bg-white h-13'>
                
                <div className='flex flex-row items-center gap-2 shrink-0 flex-nowrap'>
                    <input type="checkbox" required  className=' w-full mt-1  bg-white p-3 border-none outline-none  text-gray-700' name="" id="" />
                    <p className='shrink-0 '>I'm not a robot</p>
                </div>
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <button className=' px-4 py-2 rounded bg-amber-600 cursor-pointer text-white text-lg mt-5'> Send Message</button>
            

        </form>
      </div>
    </div>

            <div className='for-strips infinite flex flex-row  gap-2 bg-amber-600 py-2 text-xl text-white'><span>👩‍💻 web development</span><span>👩‍💻 App development</span><span>👩‍💻 Devops</span><span>👩‍💻 web development</span><span>👩‍💻 App development</span><span>👩‍💻 Devops</span><span>👩‍💻 web development</span><span>👩‍💻 App development</span><span>👩‍💻 Devops</span></div>

            
    </div>
  )
}

export default HomeSection10
