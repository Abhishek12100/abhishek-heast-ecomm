import React from 'react'
import { CrouselComponent } from '../components/crouselComponent';
import { HeeadingComponent } from '../components/headingComponent';
import { productJson } from '../json/product-json';
import { ProductCard } from '../components/productCard';
import { FaWhatsapp } from 'react-icons/fa';
import AboutUs from './about';

const HomePage = () => {
    return <>
        <section className='main-container w-full relative h-fit'>
            <div className='inner-container '>
                <div className='content-container w-full'>
                    <div className='crousel-container w-full h-fit'>
                        <CrouselComponent />
                    </div>
                    <div className='heading-component'>
                        <HeeadingComponent>
                            <h1 className='text-[2rem] lg:text-[4rem] font-extrabold uppercase'>Product List</h1>
                            <div className=''>
                                <p className='lg:text-[16px] text-[14px] font-serif uppercase font-[500] tracking-widest'>Get Extra Discount Order from What'sapp</p>
                                <div className='w-full flex justify-center mt-4'>
                                    <a href="https://wa.me/+918468805511"><button className='px-10 py-3 rounded-md font-[600] bg-green-500 text-white flex items-center gap-2 hover:animate-bounce transition-all hover:scale-110 duration-500 delay-200 '><span><FaWhatsapp className='text-xl font-[600]'/></span> <span>What'sApp</span></button></a>
                                </div>
                            </div>
                        </HeeadingComponent>
                    </div>
                    <div id='productlist' className='main-container w-full h-full relative overflow-hidden my-[1rem]'>
                        <div className='inner-container w-11/12 mx-auto py-[2rem] h-full'>
                            <div className='content-container w-full h-fit '>
                                <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-y-[3rem] justify-evenly w-full overflow-hidden '>
                                    {
                                        productJson.map((products , i)=>{
                                            return <>
                                                <ProductCard key={i} productData = {products}/>
                                            </>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <AboutUs />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HomePage;