import { Carousel } from 'flowbite-react';
import React from 'react'

const CardImageCrousel = ({productImages}) => {
    return <>
        <div className='w-full h-fit relative overflow-auto'>
            <Carousel leftControl={false} rightControl={false} indicators={false}>
            {
                productImages.map((product_image , i)=>{
                    return <>
                    <img src={product_image} className='object-cover max-h-max w-fit' alt="..." />
                    </>
                })
            }
            
            </Carousel>
        </div>
    </>
}
export default CardImageCrousel;