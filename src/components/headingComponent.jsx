import React, { Children } from 'react'

export const HeeadingComponent = ({children}) => {
    return <>
        <div className='w-full h-fit my-5 lg:my-[4rem] '>
            <div className='text-center w-full'>
                {children}
            </div>
        </div>
    </>
}