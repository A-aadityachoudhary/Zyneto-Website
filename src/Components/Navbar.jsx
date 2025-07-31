import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';


const Navbar = () => {
  const [ isOpen, setIsOpen]= useState(false)

    const toggleSidebar = ()=>{
        setIsOpen(!isOpen);
    };

    
  return (
    <div className=' bg-[#63625d] w-full z-40  text-white py-3 sm:py-5 px-4 fixed flex  flex-nowrap justify-between top-0'>
        <img className='cursor-pointer' src="https://zyneto.com/_next/image?url=%2Fassets%2Flogo.svg&w=1920&q=75" alt="" />
        <div className='flex flex-row gap-8'>
        <Link to="/" className='hidden md:block cursor-pointer text-white text-xl list-none hover:border-b-2 hover:underline-offset-1 hover:border-b-amber-700'>Home</Link>
        <Link to="/blog" className='hidden md:block cursor-pointer text-white text-xl list-none hover:border-b-2 hover:underline-offset-1 hover:border-b-amber-700'>Blogs</Link>

        <li className='hidden md:block cursor-pointer text-white text-xl list-none hover:border-b-2 hover:underline-offset-1 hover:border-b-amber-700'>About Us</li>
        </div>
        <button  className="cursor-pointer hidden md:block text-l bg-transparent font-semibold py-2 px-4 border rounded-2xl border-amber-700">Book a Call</button>
        <button className='md:hidden cursor-pointer border border-[#ada9a0]  rounded p-2'  onClick={toggleSidebar}>{isOpen?"X":<CiMenuBurger />}</button>

         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
         
    
    </div>
  )
}

export default Navbar
