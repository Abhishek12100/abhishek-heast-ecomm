import React from 'react'
import { Card } from 'flowbite-react';
import image1 from '../assets/images/cap1.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

function CardCommon({cardData}) {
  return (
    <Card

      className="max-w-sm transition-all hover:scale-105 hover:shadow-md "
      imgSrc={image1}
    //   renderImage={() => <Image loading='lazy' width={500} height={500} src="/images/blog/image-1.jpg" alt="image 1" />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <div>
        <button className='flex px-6 py-2 bg-green-500 text-white rounded-md font-[500] gap-x-2 items-center active:bg-transparent active:border-green-500 border-[0.01rem] active:text-green-500'>Learn more <span> <FaArrowRightLong className='text-sm' /></span></button>
      </div>
    </Card>
  );
}

export default React.memo(CardCommon);
