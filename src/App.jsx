import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './assets/Pages/Home'
import Footer from './Components/Footer'
import Blog from './assets/Pages/Blog'

const App = () => {
  return (
    <div className=''>
            <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
