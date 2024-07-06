"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { useAppContext } from "../context/index"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isClient, setIsClient] = useState(false);

    const {theme}=useAppContext()

    useEffect(() => {
        setIsOpen(false)
        setIsClient(true)
    }, [])

    const func = () => {
        if (isClient && (isOpen || window.innerWidth >= 768)) {
            return true
        }
        return false
    }

    return (
        <div className={`flex flex-row w-full h-20  max-md:flex-col max-md:h-auto ${!theme?'bg-neutral-500 text-white':'bg-neutral-100'}`}>
            <div className='w-1/4 flex flex-col justify-center items-center max-md:w-full max-md:p-5'>
                <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
            </div>
            <div className='w-full flex flex-row justify-center md:hidden'>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="5em" width="3em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                </div>
            </div>
            {func() && (
                <>
                    <div className='flex flex-row w-1/2 justify-center gap-8 items-center text-xl max-md:flex-col max-md:w-full max-md:p-4'>
                        <div className='cursor-pointer'>Home</div>
                        <div className='cursor-pointer'>Service</div>
                        <div className='cursor-pointer'>Feature</div>
                        <div className='cursor-pointer'>Product</div>
                        <div className='cursor-pointer'>Testimonial</div>
                        <div className='cursor-pointer'>FAQ</div>
                    </div>
                    <div className='flex flex-row w-1/4 justify-center gap-8 items-center text-xl max-md:flex-col max-md:w-full max-md:p-4'>
                        <div className='text-lime-500 cursor-pointer'>Login</div>
                        <div className='bg-lime-500 text-white p-3 rounded-lg cursor-pointer'>Sign up</div>
                    </div>
                </>
            )}
        </div>
    )
}
