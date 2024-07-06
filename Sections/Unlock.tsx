"use client"

import Image from 'next/image'
import { useAppContext } from "../context/index"

export default function Unlock() {

    const {theme}=useAppContext()

    return (
        <>
            <div className={`flex flex-row max-md:flex-col ${!theme?'bg-slate-400':''}`}>
                <div className='w-1/2 flex flex-col items-center max-md:w-full'>
                    <Image src="/images/Unlock.png" alt="Image" height={200} width={460}/>
                </div>
                <div className='w-1/2 p-5 max-md:w-full max-md:text-center'>
                    <div className={`text-4xl font-semibold pt-4 ${theme?'text-gray-600':'text-black'}  max-md:text-2xl`}>The unseen of spending three<br/> years at Pixelgrade</div>
                    <div className={`mt-4 text-sm mr-8 ${theme?'text-black':'text-yellow-200'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </div>
                    <div className='mt-6 max-md:flex max-md:flex-row max-md:justify-center'>
                        <div className={`p-4 rounded-md cursor-pointer  w-fit text-white ${theme?'bg-green-500':'bg-green-900'}`}>Learn More</div>
                    </div>
                </div>
            </div>
        </>
    )
}