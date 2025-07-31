import React from 'react'
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import { FaLocationDot } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-black pb-10'>
      <div className='pt-10 mx-4 md:px-15 md:pt-15 lg:px-20 lg:px-pt-20   flex flex-col lg:flex-row justify-between'>
                    <div className='mb-4 w-[350px]'>
                      <img src="https://zyneto.com/_next/image?url=%2Fassets%2Flogo.svg&w=1920&q=75" alt="" />
                      <p className='text-gray-400 mt-2'>At Zyneto Technologies, we're more than just a software company—we're your trusted partner in transforming your ideas into digital success.</p>
                      <div className='text-gray-400 mt-2 flex gap-2 items-center cursor-pointer' > <IoCall /> +919509625345 </div>
                      <div className='text-gray-400 mt-2 flex gap-2 items-center cursor-pointer' > <CiMail /> info@zyneto.com </div>
                      <div className='text-gray-400 mt-2 flex gap-2 items-center cursor-pointer' > <FaLocationDot /> 2nd Floor, G.D. Heights, Near Diamond Tower, Purani Chungi, Ajmer Road, Jaipur - 302021, Rajasthan, India</div>
                    </div>
                    <div>
                      <div className='flex flex-col gap-5 sm:flex-row  sm:gap-30 lg:gap-40 xl:gap-60 2xl:gap-70'>
                        <div>
                          <p className='text-white text-2xl font-bold'>Quick Links</p>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Home</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Home</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Home</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Home</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Home</li>
                        </div>
                        <div>
                          <p className='text-white text-2xl font-bold'>Services</p>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Designing</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Designing</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Designing</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Designing</li>
                          <li className='text-md text-gray-400 cursor-pointer mt-2 list-none'>Designing</li>
                        </div>
      
                      </div>
                    </div>
      
                  </div>
                  <div className='flex mx-4 mt-5 md:px-15 lg:px-20 justify-between items-center'>
                    <p className=' text-gray-400'>© Zyneto Global Technologies. All Rights Reserved.</p>
                    <div className='flex gap-3 text-gray-400 '>
                        <p className='hover:text-white'><FaFacebook /></p>
                        <p className='hover:text-white'><FaLinkedin /></p>
                        <p className='hover:text-white'><FaInstagramSquare /></p>

                    </div>
                  </div>
    </div>
  )
}

export default Footer
