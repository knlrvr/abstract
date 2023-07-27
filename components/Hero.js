import { RxDoubleArrowDown } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

import {
    BsTruck,
    BsBoxSeam,
    BsFillCreditCard2BackFill,
    BsArrowRight
} from 'react-icons/bs'

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto px-6 md:px-2" id="hero">
            <div className="pt-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-24">
                    <div className="flex justify-center md:justify-start items-center order-2 md:order-1 md:pt-12">
                        <div className="flex flex-col space-y-6">
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
                                    className="flex items-center space-x-2 border-2 border-[#222] w-1/2 md:w-1/3 group"
                                >
                                    <span className="pl-6 p-2 font-light text-sm uppercase">Shop Now</span>
                                    <BsArrowRight 
                                        className="group-hover:translate-x-1 transition duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            src="https://images.unsplash.com/photo-1634749974785-c83f79a23786"
                            alt=""
                            height="1000"
                            width="1000"
                            className="rounded-r-full rounded-t-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:border-b md:border-t border-gray-300 py-6 md:py-0">
                    <div className="flex items-center justify-between p-4 border-t md:border-t-0">
                        <BsTruck 
                            className="text-3xl text-[#222]" />
                        <div className="flex flex-col text-sm text-right w-1/2">
                            <span className="font-bold uppercase">free shipping</span>
                            <p className="font-light text-xs">Free shipping on all US orders or orders above $1,000,000. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-b md:border-t-0 md:border-b-0 md:border-r md:border-l p-4">
                        <BsBoxSeam 
                            className="text-3xl text-[#222]" />
                        <div className="flex flex-col text-sm text-right w-1/2">
                            <span className="font-bold uppercase">90 day returns</span>
                            <p className="font-light text-xs"> Simply return your item within 90 days for a full refund.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b md:border-b-0">
                        <BsFillCreditCard2BackFill
                            className="text-3xl text-[#222]" />
                        <div className="flex flex-col text-sm text-right w-1/2">
                            <span className="font-bold uppercase">secure payments</span>
                            <p className="font-light text-xs"> All payments are secured & encrypted for your protection. </p>
                        </div>
                    </div>
                </div>
            </div>

        </section> 
    )
}
