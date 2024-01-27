import { Rating } from 'flowbite-react';
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";

const AboutUs = () => {
    return <>
        <main className='main-container w-full relative h-full overflow-hidden my-[3rem]'>
            <div className='inner-container w-11/12 mx-auto '>
                <div className='content-container w-full h-fit '>
                    <div className='heading-container text-center w-full'>
                        <h1 className='text-[3.5rem] font-extrabold uppercase  tracking-tighter'>why CHOOSEING  us</h1>
                        <div>
                            <p className='uppercase tracking-widest font-[600] '>Reason for chooseing us</p>
                        </div>
                    </div>
                    <div className='my-[2rem] w-full relative '>
                        <div className='w-11/12 mx-auto h-fit '>
                            <div className='w-full bg-[#333] lg:flex justify-evenly items-center gap-[1rem] py-[1rem]'>
                                <div className='lg:w-3/12 w-11/12 mx-auto bg-white h-[10rem] flex flex-col items-center  justify-center text-center my-[1rem] space-y-[1.5rem] hover:shadow-2xl hover:shadow-gray-200'>
                                    <div className='text-right w-3/12 mx-auto '>
                                        <TbTruckDelivery className='text-right text-[2rem]'/>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[#333] font-[600]  text-[1.5rem] uppercase '>Free Delivery</h1>
                                    </div>
                                </div>
                                <div className='lg:w-3/12 w-11/12 mx-auto lg:mx-0 bg-white h-[10rem] flex flex-col items-center  justify-center text-center my-[1rem] space-y-[1.5rem] hover:shadow-2xl hover:shadow-gray-200'>
                                    <div className='text-right w-3/12 mx-auto '>
                                    <Rating>
                                    <Rating.Star color='black' />
                                    <Rating.Star color='black' />
                                    <Rating.Star color='black' />
                                    <Rating.Star color='black' />
                                    <Rating.Star color='black'  />
                                    </Rating>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[#333] font-[600]  text-[1.5rem] uppercase '>Top quality</h1>
                                    </div>
                                </div>
                                <div className='lg:w-3/12 w-11/12 mx-auto bg-white h-[10rem] flex flex-col items-center  justify-center text-center my-[1rem] space-y-[1.5rem] hover:shadow-2xl hover:shadow-gray-200'>
                                    <div className='text-right w-3/12 mx-auto '>
                                        <FaWallet className='text-right text-[2rem]'/>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[#333] font-[600]  text-[1.5rem] uppercase '>Affordable</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[4rem] mb-7 w-full relative h-fit '>
                        <div className='space-y-[2rem]'>
                            <div>
                                <h1 className='text-[3rem] uppercase text-center font-extrabold'>About Us</h1>
                            </div>
                            <div className='text-[1rem] space-y-[2rem] text-center w-10/12 mx-auto '>
                                <p>We were founded in 2019, Heast has been committed to delivering style and quality to our customers. We have affordable price , and our mission is to make high-quality clothing accessible to all.</p>
                                <p>Out Collection is carefully curated to include a wide range of style, ensuring that there's something for everyone. From everyday essentials to statement pieces, Heast is your one-stop for all your clothing needs</p>
                                <p>At Heast, we're more than just a clothing brand - we're a community. We value our customers and strive to create an inclusive, welcoming space where everyone can express their personal style.</p>
                                <p>Thank you for choosing Heast. We can't wait to see your order!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default AboutUs;
