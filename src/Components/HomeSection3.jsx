import React,{useState} from 'react'

const HomeSection3 = () => {


  const [openIndex, setOpenIndex]=useState(0);

        const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? index : index); 
  };


  const blogs=[
    {
      name:"Artificial Intelligence",
      subHead:"Infinite Opportunities with AI",
      detail:"Explore the possibilities of artificial intelligence with Zyneto Technologies. Our AI solutions revolutionize industries and enhance user experiences. From predictive analytics to natural language processing, we transform ideas into intelligent solutions, prioritizing seamless interactions and business objectives. Our AI expertise helps you automate processes, gain deeper insights, and create personalized experiences that resonate with your audience. Join us in navigating the cutting-edge frontier of AI technology, and unlock new levels of efficiency, innovation, and growth for your business.",
      imgUrl:"https://zyneto.com/_next/image?url=%2Fassets%2Faiservice.webp&w=828&q=75"
    },
    {
      name:"Web Scraping",
      subHead:"Data-Driven Opportunities",
      detail:"Our web scraping service helps your business with data. We use advanced methods to gather and analyze data from different websites, giving you useful insights and competitive information. Whether you need market research, price tracking, or lead generation, our web scraping solutions are customized to fit your business needs. We focus on delivering precise and relevant data that helps you make informed decisions, stay ahead of the competition, and identify new opportunities for growth. With our service, you can harness the full potential of web data to drive your business forward.",
      imgUrl:"https://zyneto.com/_next/image?url=%2Fassets%2Fscrapingservice.webp&w=828&q=75",
    },
    {
      name:"Devops",
      subHead:"Streamlining Dev, Enhancing Ops",
      detail:"Our DevOps service bridges the gap between software development and IT operations, ensuring faster time to market, increased efficiency, and improved quality of software builds. By adopting the latest DevOps tools and practices, we help in automating and optimizing your IT processes, promoting a culture of continuous improvement and innovation. With our expertise, we streamline workflows, enhance collaboration between teams, and implement robust monitoring and feedback systems. This not only accelerates deployment cycles but also reduces the risk of errors and downtime. Our goal is to create a seamless integration of development and operations, enabling your business to adapt quickly to changing demands and maintain a competitive edge in the market.",
      imgUrl:"https://zyneto.com/_next/image?url=%2Fassets%2Fdevopsservice.webp&w=828&q=75",
    },
    {
      name:"Web Development",
      subHead:"Website Solutions, Business Expansion",
      detail:"Our web development service creates strong, easy-to-use websites that can grow with your business. Using the latest technologies, we build custom websites that look great and work well. From online stores to informative websites, our solutions use AI and machine learning to improve user experience and help your business grow. We focus on delivering websites that meet your specific needs, ensuring that they are equipped to support your business now and in the future, helping you reach new heights of success.",
      imgUrl:"https://zyneto.com/_next/image?url=%2Fassets%2Fwebdevservice.webp&w=828&q=75",
    },
  ]




  return (
    
    <div className='bg-gray-100 py-15 px-4 md:'>
      <p className='md:text-center text-4xl mb-2  md:text-5xl font-bold'>Design, Develop, and Deploy with  <span className='text-amber-600'> Excellence</span></p>
      <p className='text-gray-600  md:text-center mb-5 text-xl'>Unlike traditional services, we use the best methods to quickly and efficiently create advanced technology solutions. Our approach ensures not only speed but also quality, guaranteeing that your project reaches its full potential.</p>
      
      <div className='m-4 flex flex-wrap mb-10 gap-3 md:mx-20 lg:mx-35 '>
      {blogs.map((item,index)=>(
        <div key={index} className=' shrink-0 '>
          
            <button   className={`px-4 py-2 border border-amber-600 text-lg  ${openIndex === index ? 'bg-amber-600 text-white' : ''}`} onClick={() => toggleAnswer(index)}>{item.name}</button>
            
          
        </div>


          
      ))}
      </div>


      
          
{openIndex !== null && (
  <div className='m-4 md:mx-20 lg:mx-35'>
    <img
      className='sm:float-right w-[270px] md:w-[380px] lg:w-[450px]  h-auto ml-4 mb-4 rounded shadow'
      src={blogs[openIndex].imgUrl}

    />

    <p className='text-3xl font-bold mb-2'>{blogs[openIndex].subHead}</p>
    <p className='text-gray-600 text-lg text-justify'>{blogs[openIndex].detail}</p>
    <div className='clear-both' /> {/* Clears the float for layout stability */}
  </div>
)}

        
          
    
      
    </div>
  )
}

export default HomeSection3
