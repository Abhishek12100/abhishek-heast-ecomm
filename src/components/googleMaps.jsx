import React from 'react'
import { FeedbackComponent } from '../common/feedbackComponent';

const GoogleMaps = () => {
    return <>
        <section id='contact' className='w-full relative border-[0.1rem] border-gray-300 h-full mt-[3rem]'>
            <div className='w-full mx-auto h-full relative'>
                <div className='w-full h-fit relative  bg-white'>
                    {/* <iframe className='w-full h-[30rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5798.233183740218!2d77.2765650413963!3d28.36215243911657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdeae61ea2b89%3A0x5d8b9ec9a9a6b517!2sChacha%20Chowk%2C%20Block%20A%2C%20Nangla%20Gujran%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1704003720603!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe className='w-full h-[30rem]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.2685976361736!2d77.346503!3d28.350728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzAyLjYiTiA3N8KwMjAnNDcuNCJF!5e0!3m2!1sen!2sin!4v1706326092807!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='absolute lg:top-[3rem] lg:right-[4rem] lg:left-auto w-11/12 mx-auto lg:mx-0 top-[1rem] left-[1rem] lg:w-3/12'>
                <FeedbackComponent />
            </div>
        </section>
    </>
}
export default GoogleMaps;