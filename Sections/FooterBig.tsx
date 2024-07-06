import Image from "next/image"

export default function FooterBig() {
    return (
        <>
            <div className="flex flex-row bg-black text-white p-16 gap-8 max-md:flex-col max-md:grid-cols-1 max-md:p-8">
                <div className="flex flex-col w-1/3 space-y-8 max-md:w-full max-md:items-center ">
                    <div>
                        <Image src="/images/icons.png" alt="Logo" width={200} height={100}/>
                    </div>
                    <div className="max-md:text-center">
                        <div>
                            Copyright © 2020 Nexcent ltd.
                        </div>
                        <div>
                            All rights reserved
                        </div>
                    </div>
                    <div>
                        <Image src="/images/social_logos.png" alt="Social Icons" height={50} width={200}/>
                    </div>
                </div>
                <div className="w-1/3 grid grid-cols-2 justify-center max-md:w-full max-md:grid-rows-2 max-md:grid-cols-1 gap-4">
                    <div className="space-y-3 max-md:text-center">
                        <div className="text-xl font-semibold">Company</div>
                        <div className="space-y-2 text-sm">
                            <div className="cursor-pointer">About us</div>
                            <div className="cursor-pointer">Blog</div>
                            <div className="cursor-pointer">Contact us</div>
                            <div className="cursor-pointer">Pricing</div>
                            <div className="cursor-pointer">Testimonials</div>
                        </div>
                    </div>
                    <div className="space-y-3 max-md:text-center">
                        <div className="text-xl font-semibold">Support</div>
                        <div className="space-y-2 text-sm">
                            <div className="cursor-pointer">Help center</div>
                            <div className="cursor-pointer">Terms of service</div>
                            <div className="cursor-pointer">Legal</div>
                            <div className="cursor-pointer">Privacy Policy</div>
                            <div className="cursor-pointer">Status</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 space-y-2 max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="text-xl font-semibold text-center max-md:text-left">Stay up to date</div>
                    <div className="flex flex-row border-2 border-gray-700 bg-gray-700 h-9 w-full max-w-md rounded-md">
                        <input type="text" className="border-gray-700 bg-gray-700 w-full px-2 outline-none" placeholder="Enter your email"/>
                        <div className="cursor-pointer flex flex-row justify-end items-center px-2">
                            <Image src="/images/arrow.png" alt="Arrow Icon" height={20} width={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
