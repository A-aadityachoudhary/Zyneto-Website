import React from 'react'

const Card = ({num, name,desc}) => {
  return (
    <div className='bg-amber-900 lg:w-[320px] text-white p-4 rounded-2xl mx-4 my-4'>
      <p className='text-7xl font-bold mb-3'>*{num}</p>
      <p className='font-bold text-3xl mb-3'>{name}</p>
      <p className='text-xl'>{desc}</p>
    </div>
  )
}

export default Card
