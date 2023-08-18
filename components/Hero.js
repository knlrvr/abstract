import { RxDoubleArrowDown } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

import {
    BsArrowRight
} from 'react-icons/bs'

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto px-6 md:px-2" id="home">
            <div className="p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 min-h-screen">
                    <div className="flex justify-center md:justify-start items-center order-2 md:order-1 md:pt-12">
                        <div className="flex flex-col space-y-6 pb-24 md:pb-0">
                            <div className="flex flex-col space-y-3">
                                <h1 className="text-5xl md:text-7xl font-mono font-semibold tracking-widest">
                                    Abstract.
                                </h1>
                                <h2 className="text-2xl font-light">
                                    The 
                                    <span className="font-semibold"> concept </span> 
                                    of 
                                    <span className="font-semibold"> shopping</span>.
                                </h2>
                            </div>
                            <div className="pt-8 flex justify-center md:justify-start">
                                <Link href="#products"
                                    className="flex items-center space-x-2 border border-[#222] w-1/2 md:w-1/3 group"
                                >
                                    <span className="pl-6 p-2 font-light text-sm uppercase">Shop Now</span>
                                    <BsArrowRight 
                                        className="group-hover:translate-x-1 transition duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex items-center">
                        <Image
                            src="https://images.unsplash.com/photo-1634749974785-c83f79a23786"
                            alt=""
                            height="1000"
                            width="1000"
                            className="rounded-r-full rounded-t-full"
                        />
                    </div>
                </div>
            </div>

        </section> 
    )
}
