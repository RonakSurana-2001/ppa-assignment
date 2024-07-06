'use client'

import Image from 'next/image'
import { useAppContext } from "../context/index"

export default function Customer() {

    const {theme}=useAppContext()

    return (
        <>
            <div className={`flex flex-row p-6  max-md:flex-col ${theme?'bg-gray-100':'bg-gray-400'}`}>
                <div className='w-2/5 flex flex-col items-center justify-center pl-14 max-md:w-full max-md:pl-0'>
                    <Image src="/images/customer.jpeg" alt="Image" height={200} width={200} className='w-64 h-72 rounded-md' />
                </div>
                <div className='w-3/5 max-md:w-full'>
                    <div className={`w-11/12 max-md:w-full max-md:p-5 ${!theme?'text-fuchsia-950':''}`}>
                        <div className='text-1xl'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </div>
                        <div className='mt-3'>
                            <div>Learn More</div>
                            <div>Tim Smith British Dragon Boat Racing Association</div>
                        </div>
                    </div>
                    <div className='flex flex-row pt-5 space-x-12 max-md:w-full max-md:space-x-0 max-md:flex-col max-md:items-center'>
                        <div>
                            <Image src="/images/clientpic1.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div>
                            <Image src="/images/clientpic2.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div>
                            <Image src="/images/clientpic3.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div>
                            <Image src="/images/clientpic4.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div>
                            <Image src="/images/clientpic5.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div>
                            <Image src="/images/clientpic6.png" alt="Logo" width={30} height={50} />
                        </div>
                        <div className={`cursor-pointer flex flex-row items-center ${theme?'text-green-500':'text-black'}`}>
                            <div>
                            Meet all customers
                            </div>
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}