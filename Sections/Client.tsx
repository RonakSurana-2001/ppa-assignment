'use client'
import Image from 'next/image'
import { useAppContext } from "../context/index"

export default function Client() {

    const {theme}=useAppContext()

    return (
        <div className={`flex flex-col p-3 ${!theme?'text-black bg-slate-400':''}`}>
            <div className='text-4xl text-center font-semibold p-5'>Our Clients</div>
            <div className='text-md text-center'>We have been working with some Fortune 500+ clients</div>
            <div className='flex flex-row gap-32 justify-center p-10 animate-move-left-to-right max-md:flex-col max-md:items-center max-md:gap-10'> 
                <Image src="/images/clientpic1.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic2.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic3.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic4.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic5.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic6.png" alt="Logo" width={50} height={100} />
                <Image src="/images/clientpic7.png" alt="Logo" width={50} height={100} />
            </div>
        </div>
    )
}