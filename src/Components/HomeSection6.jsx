import React from 'react'
import { FaStar } from "react-icons/fa";
import ReviewCard from './ReviewCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeSection6 = () => {

      const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000 ,
    slidesToShow: 1,
    slidesToScroll: 1,
    
        responsive: [
      {
        breakpoint: 500, // screens < 768px (smaller devices)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:900 , // screens ≥ 768px (md and larger)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:1200 , // screens ≥ 768px (md and larger)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
            {
        breakpoint:9999 , // screens ≥ 768px (md and larger)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    arrows: true,
  };

    const reviews = [
        {
            name:"Aaditya Choudhary",
            stars: <><div className='flex flex-row text-amber-600'><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></div></> ,
            reviewDetail: "this is the good product have i used it so many times this is the genuine ratings given by me ",

        },
        {
            name:"ronit",
            stars: <><div className='flex flex-row text-amber-600'><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></div></> ,
            reviewDetail:"nice product i have used it us ",
        },
        {
            name:"anish",
            stars:<><div className='flex flex-row text-amber-600'><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></div></> ,
            reviewDetail:"good to use this is the good product have i used it so good to use this is the good product have i used it s",
        },
    ]
  return (
    <div className='bg-white pb-5'>
      <p className='px-5 pb-5 text-center pt-15 text-4xl font-bold text-black'>What Our Clients Say? Voices of Success</p>
      <p className='px-5 pb-10 text-center  text-[24px] font-bold text-gray-700'>These testimonials are not just words; they are the voices of success, reflecting the tangible impact our services have had on their businesses.</p>
       <Slider {...settings}>
        {reviews.map((review,index) => (
          <ReviewCard key={index} review={review} />
        ))}

        </Slider>

        <div className='flex justify-center my-15'><button className='px-5 py-3 border-2 border-white bg-black text-white cursor-pointer hover:bg-amber-600  rounded-3xl'>READ MORE REVIEWS</button></div>

    </div>
  )
}

export default HomeSection6
