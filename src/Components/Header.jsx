import React from 'react'
import Typed from 'typed.js';
import Strips from './Strips';

const Header = () => {
   
  const el = React.useRef(null);

   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Innovative","Creative","Data Driven","Virtual"],
      typeSpeed: 45,
      loop:true,
      smartBackspace: true,
      showCursor: false, 
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      
    };
  }, []);

  return (
    <div className='bg-black pb-15 overflow-hidden'>
      <div className='flex flex-col md:flex-row mx-4 md:mx-10 lg:mx-20  pt-30 md:pt-40 gap-20 md:gap-10 mb-8 sm:mb-14 lg:mb-8'>
        <div>
          <button className='flex mx-auto md:mx-0 text-amber-600 p-2 mb-4  rounded-2xl border border-amber-600'>Your Best Partner In</button>
          <p className='text-white  text-5xl font-bold'>Transforming Your Ideas Into </p>
          <p><span className='text-amber-600 text-5xl font-bold border-r border-r-amber-600' ref={el} /></p>
          <p className='text-white text-5xl font-bold mb-4'>Success</p>
          <p className='text-xl text-white mb-4'>From concept to execution, Zyneto Technologies is a web development company that delivers high-quality digital solutions.</p>
          <button className='flex mx-auto md:mx-0 px-3 py-2 text-lg  text-white bg-amber-600 cursor-pointer rounded-xl font-semibold'>Our Services</button>
        </div>
        {/* this is second div inside flex */}
        <div>
          <img className='w-[90%] h-[90%] -z-10 hero-boy mx-4 ' src="https://zyneto.com/_next/image?url=%2Fassets%2Fheroboys.webp&w=1080&q=75" alt="" />
        </div>

      </div>

      <div className='flex gap-5 px-4  md:gap-8 flex-wrap justify-center mb-15'>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero1logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero2logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero3logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero4logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero5logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero6logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero7logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero8logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero9logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero10logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero12logo.svg&w=640&q=75" alt="" /></div>
        <div className='bg-gray-100   rounded-xl '><img src="https://zyneto.com/_next/image?url=%2Fassets%2Fhero13logo.svg&w=640&q=75" alt="" /></div>
      </div>

      <Strips/>

      
      
    </div>
  )
}

export default Header
