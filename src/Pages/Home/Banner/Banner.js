import React from 'react';
import about from '../../../Assets/about.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <div className='banner-img'>
               <img src={about} className="" />
            </div>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4 mt-20">
              <h1 className='text-5xl font-bold text-black'>
                Find Your<br/>
                Appropriate<br/>
                Health Service
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-24 right-5 top-1/2 mt-24">
              <p className='text-xl text-black font-semibold'>Hi, I am Dr. Mosh. Here, I am providing services like Medicine care, Surgery, Tele Medicine and so on. Check my services section to know more. Book your appropriate sevice.</p>
            </div>
        </div> 
        
        </div>
    );
};

export default Banner;