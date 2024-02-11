import React from 'react'
import LayoutCommon from '../common/LayoutCommon'
import HeadingCommon from '../common/HeadingCommon'
import CardsCommon from '../common/CardsCommon'
import {BlogJson} from '../json/Blogs-json';

function Blogs() {
  return (
    <>
       <LayoutCommon>
            <HeadingCommon heading={"Blogs"} subHeading={"Know about our products"}></HeadingCommon>
            <div className='container my-[3rem] mx-auto '>
                <div className='lg:grid lg:grid-cols-3 justify-around gap-[2rem]  overflow-hidden'>
                {
                    BlogJson && BlogJson.map((blog, index)=>{
                        return <>
                        <div key={index}>
                            <CardsCommon cardData={blog}  />
                        </div>
                        </>
                    })
                }
                    
                </div>
            </div>
       </LayoutCommon>
    </>
  )
}

export default React.memo(Blogs)