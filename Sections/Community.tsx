"use client"

import Image from 'next/image'
import { useAppContext } from "../context/index"


export default function Community() {

    const {theme}=useAppContext()

    return (
        <>
            <div className={`flex flex-col justify-center items-center p-4 ${!theme?'bg-slate-400 text-teal-900':''}`}>
                <div className='text-3xl text-center font-semibold'>
                    <div>Manage your entire community</div>
                    <div> in a single system</div>
                </div>
                <div className='p-2'>Who is Nextcent suitable for?</div>
                <div className='flex flex-row justify-center space-x-36 p-9 max-md:flex-col max-md:space-x-0 max-md:space-y-5'>
                    <div className='flex flex-col justify-center items-center border-2 space-y-4 p-5 text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/clientpic1.png" alt="Logo" width={50} height={100} />
                        <div className='text-xl'>
                            <div>Membership</div>
                            <div>Organizations</div>
                        </div>
                        <div>
                            <p>Our membership management </p>
                            <p>software provides full automation of</p>
                            <p>membership renewals and payments</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 space-y-4 p-5 text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/clientpic2.png" alt="Logo" width={50} height={100} />
                        <div className='text-xl'>
                            <div>National</div>
                            <div>Associations</div>
                        </div>
                        <div>
                            <p>Our membership management </p>
                            <p>software provides full automation of</p>
                            <p>membership renewals and payments</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 space-y-4 p-5 text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/clientpic3.png" alt="Logo" width={50} height={100} />
                        <div className='text-xl'>
                            <div>Clubs And</div>
                            <div>Groups</div>
                        </div>
                        <div>
                            <p>Our membership management </p>
                            <p>software provides full automation of</p>
                            <p>membership renewals and payments</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}