'use client'
import Image from 'next/image'
import { useAppContext } from "../context/index"

export default function Calender() {

    const {theme}=useAppContext()

    return (
        <>
            <div className={`flex flex-row max-md:flex-col ${!theme?'bg-teal-800':''}`}>
                <div className='w-1/2 flex flex-col items-center p-5 max-md:w-full'>
                    <Image src="/images/calender.png" alt="Image" height={200} width={370} />
                </div>
                <div className='w-1/2 p-7 max-md:w-full max-md:p-7'>
                    <div className={`text-3xl font-semibold pt-4  max-md:text-center ${theme?'text-gray-700':'text-orange-500'}`}>How to design your site footer like<br /> we did</div>
                    <div className={`mt-4 text-sm pr-28 max-md:text-center max-md:pr-0 ${!theme?'text-white':""}`}>
                        How to design your site footer like we did
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </div>
                    <div className='mt-6 max-md:flex max-md:flex-col max-md:items-center'>
                        <div className='cursor-pointer p-2 rounded-sm bg-green-500 w-fit text-white'>Learn More</div>
                    </div>
                </div>
            </div>
        </>
    )
}