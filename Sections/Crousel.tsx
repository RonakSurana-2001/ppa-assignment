"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../components/ui/card"

import Image from 'next/image'

import { useAppContext } from "../context/index"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const {theme}=useAppContext()


    return (
        <Carousel
            plugins={[plugin.current]}
            className="max-w-xs mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div>
                            <Card>
                                <CardContent className={`flex flex-row justify-center items-center p-10 ${theme?'bg-slate-100':'bg-slate-500'}`}>
                                    <div className="w-1/2 flex flex-col justify-center">
                                        <div className={`text-6xl  ${theme?'text-slate-700':'text-yellow-100'}`}>Lessons and insights {index}</div>
                                        <div className={`text-6xl ${theme?'text-green-500':'text-green-100'}`}>from 8 Years</div>
                                        <div className={`text-sm mt-3 ${!theme?'text-white':''}`}>where to grow your business as photographer : site or social media?</div>
                                        <div className="mt-2">
                                            <div className={`${theme?'bg-green-600':'bg-amber-500'} w-20 text-center p-3 rounded-sm mt-3 cursor-pointer`}>Register</div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-row justify-center">
                                        <Image src="/images/crousel_picture.png" alt="Logo" width={300} height={200} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    )
}
