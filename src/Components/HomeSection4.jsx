import React from 'react'
import Card from './Card'
import Marquee from "react-fast-marquee";



const HomeSection4 = () => {
    const cards =[
        {
            num: 1,
            name:"Understanding Business Goals",
            desc:"We kick off by getting to know your business inside out. What are your goals, target audience, and unique qualities? We want to align our work with your success.",
        },
        {
            num:2,
            name:"Requirement Analysis",
            desc:"Next, we dive into the details. We identify exactly what your project needs, understanding challenges and opportunities. This sets the stage for a clear scope and measurable goals.",
        },
        {
            num:3,
            name:"Ideate",
            desc:"Now comes the fun part – brainstorming creative ideas! We explore innovative concepts that will form the basis of your digital project, ensuring it stands out and meets your objectives.",
        },
        {
            num:4,
            name:"Design",
            desc:"With a solid plan in place, we move on to the design phase. We create visually appealing and user-friendly designs, whether it's for a website, mobile app, or brand logo, all aligned with your brand identity.",
        },
        {
            num:5,
            name:"Development",
            desc:"Our commitment doesn't end at launch. We're here for ongoing support, addressing issues, implementing updates, and making sure your digital presence evolves smoothly.",
        },
        {
            num:6,
            name:"Evaluate",
            desc:"Quality is non-negotiable. We rigorously test and assess every aspect of the project. User feedback guides us, and we iron out any wrinkles to ensure a polished, flawless end product.",
        },
        {
            num:7,
            name:"Post Launch Support",
            desc:"Our commitment doesn't end at launch. We're here for ongoing support, addressing issues, implementing updates, and making sure your digital presence evolves smoothly.",
        },
    ]

  return (
    
        <div className='flex flex-col gap-3 md:gap-10 xl:gap-15 md:flex-row  px-4 lg:px-20 xl:px-50 py-10 md:h-[100vh] overflow-hidden bg-black'>
            <div>
                <p className='text-white text-4xl md:text-5xl font-bold mb-2'><span className='text-amber-600'>Work Process</span> at Zyento Technologies</p>
            <p className='text-white text-xl mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illo dignissimos aut delectus qui ad consectetur quis quam, reiciendis recusandae!</p>
            <img className='flex mx-auto my-2 w-[280px] sm:w-[360px]   ' src="https://zyneto.com/_next/image?url=%2Fassets%2Frocket.webp&w=640&q=75" alt="" />  
            </div>

            
               <marquee behavior="" className="hidden lg:block" direction="up">
            <div className=' '>
                {cards.map((item,index)=>(
                <Card key={index} num={item.num} name={item.name} desc={item.desc}  />
            ))}
            </div>
            </marquee>
            
        
            
        </div>
        

        )
}

export default HomeSection4
