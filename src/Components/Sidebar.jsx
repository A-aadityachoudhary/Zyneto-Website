import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({isOpen,toggleSidebar}) => {
    

  return (
    <>
      
      <div className={`fixed top-15 sm:top-17 left-0 h-[30vh] w-full bg-[#63625d]  z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'hidden'
        }`}>
        <Link to="/blog"><p className=' pl-3 py-3 cursor-pointer hover:bg-amber-600 text-white text-lg   active:bg-gray-200 list-none flex gap-40'>Blogs</p></Link>
        <Link to="/"> <p className=' pl-3 py-3 cursor-pointer text-lg hover:bg-amber-600  active:bg-gray-200 list-none text-white'>Home</p></Link>
        
      </div>

      {isOpen && (
        <div
          onClose={() => toggleSidebar(false)}
          className="fixed"
        />
      )}


    </>
  )
}

export default Sidebar
