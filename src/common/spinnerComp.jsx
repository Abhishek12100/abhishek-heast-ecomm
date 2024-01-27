import { Spinner } from 'flowbite-react';
import React from 'react'

const SpinnerComp = () => {
    return <>
        <div className='w-screen h-[100vh] relative bg-[#999] bg-opacity-30'>
            <div>
                <Spinner className="h-[20rem] w-[20rem]" />
            </div>
        </div>
    </>
}
export default SpinnerComp;