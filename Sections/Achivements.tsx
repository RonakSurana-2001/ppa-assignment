'use client'
import Image from 'next/image'
import { useAppContext } from "../context/index"
import { useEffect, useState } from 'react';


export default function Achivements() {

    const { theme } = useAppContext()

    let [members, setMembers] = useState(0);
    let [clubs, setClubs] = useState(0);
    let [events, setEvents] = useState(0);
    let [payments, setPayments] = useState(0);

    const targetMembers = 2245341;
    const targetClubs = 46328;
    const targetEvents = 8828867;
    const targetPayments = 1926436;

    useEffect(() => {
        const updateCounter = () => {
            setMembers(prevMembers => Math.min(Math.floor(prevMembers + targetMembers / 100), targetMembers));
            setClubs(prevClubs => Math.min(Math.floor(prevClubs + targetClubs / 100), targetClubs));
            setEvents(prevEvents => Math.min(Math.floor(prevEvents + targetEvents / 100), targetEvents));
            setPayments(prevPayments => Math.min(Math.floor(prevPayments + targetPayments / 100), targetPayments));
        };

        const interval = setInterval(() => {
            updateCounter();

            if (
                members >= targetMembers &&
                clubs >= targetClubs &&
                events >= targetEvents &&
                payments >= targetPayments
            ) {
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [members, clubs, events, payments]);

    return (
        <>
            <div className={`grid grid-cols-2 items-center justify-center p-10 max-md:grid-rows-2 max-md:grid-cols-1 max-md:p-2 ${theme ? 'bg-slate-100' : 'bg-slate-600 text-yellow-100'}`}>
                <div className='flex flex-col justify-center items-start pl-20 max-md:pl-0 max-md:items-center'>
                    <div className='text-3xl font-semibold max-md:text-center'>Helping a local</div>
                    <div className='text-3xl text-green-500 font-semibold max-md:text-center'>business reinvent itself</div>
                    <div className='text-center max-md:text-center'>We reached here with our hard work and dedication</div>
                </div>
                <div className=' grid grid-cols-2 justify-items-center items-center gap-4 space-y-4 max-md:grid-rows-4 max-md:grid-cols-1 max-md:space-y-0 max-md:gap-7'>
                    <div className='flex flex-row gap-2 pr-6'>
                        <div>
                            <Image src="/images/achivements1.png" alt="Image1" height={50} width={50} />
                        </div>
                        <div>
                            <div>{members}</div>
                            <div>Members</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 pr-5'>
                        <div>
                            <Image src="/images/achivements2.png" alt="Image2" height={50} width={50} />
                        </div>
                        <div>
                            <div>{clubs}</div>
                            <div>Clubs</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div>
                            <Image src="/images/achivements3.png" alt="Image3" height={50} width={50} />
                        </div>
                        <div>
                            <div>{events}</div>
                            <div>Event Bookings</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div>
                            <Image src="/images/achivements4.png" alt="Image4" height={50} width={50} />
                        </div>
                        <div>
                            <div>{payments}</div>
                            <div>Payments</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
