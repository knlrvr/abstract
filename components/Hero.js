import { RxDoubleArrowDown } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

import { 
    BsCreditCard,
    BsTruck,
    BsShopWindow,
    BsTags
} from 'react-icons/bs'

// #553666

export default function Hero() {
    return (
        <>
        <section className="bg-[#fbefe5]">
            <div className="max-w-5xl mx-auto px-6 pb-16" id="home">
                <div className="flex justify-center">
                    <Image
                    src="/abs-brand-new.png"
                    alt=""
                    width="1000"
                    height="1000"
                    className="h-36 sm:h-48 md:h-64 object-cover scale-110"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-8 md:mt-16">

                    <div className="flex flex-col items-center md:items-start">

                        <p className="font-semibold pt-4 text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest">You want it. We&apos;ve got it.</p>
                        <p className="font-light py-2 text-center md:text-left text-sm sm:text-base md:text-lg lg:text-xl">
                            Shop & discover your favorite aspects of consumerism & materialism, all at the tips of your fingers.
                        </p>

                        <Link href="#products" 
                            className="text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-xl bg-[#553666] w-fit px-6 py-3 mt-4 text-white hover:bg-[#222] hover:text-neutral-100 transition duration-200">
                            Browse Our Products
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 gap-y-8">
                        <div className="flex items-center space-x-4">
                            <BsTruck className="text-5xl text-[#553666]" />
                            <div className="flex flex-col">
                                <span className="font-semibold">FREE</span>
                                <span className="font-light text-xs">Shipping on all <br /> US orders</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <BsShopWindow className="text-5xl text-[#553666]" />
                            <div className="flex flex-col">
                                <span className="font-semibold">1M+</span>
                                <span className="font-light text-xs">Retailers <br /> Participating</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <BsTags className="text-5xl text-[#553666]" />
                            <div className="flex flex-col">
                                <span className="font-semibold">1M+</span>
                                <span className="font-light text-xs">Brands <br /> participating</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <BsCreditCard className="text-5xl text-[#553666]" />
                            <div className="flex flex-col">
                                <span className="font-semibold">ALL</span>
                                <span className="font-light text-xs">Payment Methods <br /> Accepted</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </section>
        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g className="wave" fill="#fbefe5">
                        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
    </>
    )
}
