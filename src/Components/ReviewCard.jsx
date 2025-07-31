import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div>
      <div className=' rounded-xl  bg-[#FFEAD8] m-5 px-8 py-20'>
        <div className='flex justify-between'>
            <p className='font-bold'>{review.name}</p>
            <p>{review.stars}</p>
        </div>
        <p className='pb-5'>Verified purchase</p>
        <p className='text-gray-400'>{review.reviewDetail}</p>
      
        
      </div>
    </div>
  )
}

export default ReviewCard
