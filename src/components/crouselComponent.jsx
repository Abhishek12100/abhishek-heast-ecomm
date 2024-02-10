import { Carousel } from 'flowbite-react';
import React from 'react'
import crousel1 from '../assets/images/mainCrousel1.png'
import crousel2 from '../assets/images/mainCrousel2.png';
import crousel3 from '../assets/images/mainCrousel3.png';
import crousel4 from '../assets/images/mainCrousel4.png';
import crousel5 from '../assets/images/mainCrousel5.png';


export function CrouselComponent() {
  return (
    <div className="h-56 lg:h-fit rounded-none ">
      <Carousel className='w-full crousel-inner-container lg:h-[40rem] rounded-none ' pauseOnHover>
        <img loading='lazy' src={crousel1} className='object-fill' alt="..." />
        <img loading='lazy' src={crousel2} className='object-fill' alt="..." />
        <img loading='lazy' src={crousel3} className='object-fill' alt="..." />
        <img loading='lazy' src={crousel4} className='object-fill' alt="..." />
        <img loading='lazy' src={crousel5} className='object-fill' alt="..." />
      </Carousel>
    </div>
  );
}