import React,  { useState } from 'react'

const HomeSection8 = () => {

    const [openIndex, setOpenIndex]=useState(null);

        const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
  };

  const questions =[
        {
            name:"How can I contact Zyneto Technologies?",
            ans:"You can reach us through our Contact page on the website. We welcome inquiries, feedback, and collaboration opportunities. Feel free to drop us a message, and we'll get back to you promptly"

        },
        {
            name:"Can you redesign an existing website or application for better user experience?",
            ans:"Yes, we can help you redesign your website or application for a better user experience.",

        },
        {
            name:"Do you offer ongoing support for web development projects?",
            ans:"Yes, we offer ongoing support for web development projects to ensure their smooth operation and continuous improvement.",

        },
        {
            name:"Which platforms do you develop mobile apps for?",
            ans:"We develop mobile apps for both iOS and Android platforms.",

        },
        {
            name:"How can Zyneto Technologies help with DevOps optimization?",
            ans:"We can help you optimize your DevOps processes by automating your development, testing, and deployment workflows, improving collaboration between teams, and implementing monitoring and analytics tools.",

        },
    ]


  return (
    <div className='flex flex-col md:flex-row gap-10 mx-4 my-8 md:m-10 lg:m-20'>
      <img className='size-[500px] items-center md:hidden' src="https://zyneto.com/_next/image?url=%2Fassets%2Ffaq.webp&w=1920&q=75" alt="" />
      <div>
        <p className='text-4xl font-bold mb-3'>Frequently Asked <span className='text-amber-600'>Questions</span></p>
        <p className='text-gray-600 text-xl mb-3'>Here are some basic questions and answers to help you get started.</p>
        { questions.map((item,index)=>(
        
            <div key={index} className=' border-b border-b-gray-400 py-6'>
            <p className='text-xl font-bold pb-4  cursor-pointer '  onClick={() => toggleAnswer(index)}>{item.name}</p>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.ans}</p>
            )}
            
         </div>

        ))}
      </div>
      <img className='size-[500px] hidden md:block' src="https://zyneto.com/_next/image?url=%2Fassets%2Ffaq.webp&w=1920&q=75" alt="" />
    </div>
  )
}

export default HomeSection8
