'use client'

import Image from 'next/image'
import { useAppContext } from "../context/index"

export default function Updates() {
    const {theme}=useAppContext()
    return (
        <>
            <div className={`flex flex-col justify-center items-center p-8 pb-32 ${!theme?'bg-gray-900 text-cyan-300':''}`}>
                <div className='text-3xl text-center font-semibold mb-4 '>
                    Caring is the new marketing
                </div>
                <div className='p-1 text-center w-1/2 mb-5'>
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lots more.
                </div>
                <div className={`flex flex-row flex-wrap justify-center gap-8 max-md:flex-col max-md:items-center w-full ${!theme?'text-slate-950':''}`}>
                    <div className='relative flex flex-col justify-center items-center text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/upphoto1.png" alt="Logo" width={280} height={100} className="w-full h-auto max-md:mb-96" />
                        <div className='w-3/4 bg-slate-200 absolute top-48 p-3 rounded-md max-md:top-32 max-sm:top-20'>
                            <div>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </div>
                            <div className='p-2'>
                                <div className='text-green-600 cursor-pointer'>Read more</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col justify-center items-center text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/upphoto2.png" alt="Logo" width={300} height={100} className="w-full h-auto max-md:mb-96" />
                        <div className='w-3/4 bg-slate-200 absolute top-48 p-3 rounded-md max-md:top-32 max-sm:top-20'>
                            <div>
                                What are your safeguarding responsibilities and how can you manage them?
                            </div>
                            <div className='p-2'>
                                <div className='text-green-600 cursor-pointer'>Read more</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col justify-center items-center text-center max-md:w-full max-md:p-5'>
                        <Image src="/images/upphoto3.png" alt="Logo" width={280} height={100} className="w-full h-auto max-md:mb-36" />
                        <div className='w-3/4 bg-slate-200 absolute top-52 p-3 rounded-md max-md:top-32 max-sm:top-20'>
                            <div>
                                Revamping the Membership Model with Triathlon Australia
                            </div>
                            <div className='p-2'>
                                <div className='text-green-600 cursor-pointer'>Read more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
