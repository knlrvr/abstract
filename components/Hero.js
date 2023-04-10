import { RxDoubleArrowDown } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="h-screen" id="hero">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image  
                    src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11"
                    width="1000"
                    height="0"
                    alt="background"
                    className=""
                />
            </div>
            <div className="text-6xl md:text-7xl lg:text-8xl text-gray-700 font-serif font-bold tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-28">
                Abstract
            </div>
            <div className="text-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5 tracking-widest">
                <p className="text-sm text-center md:text-md lg:text-lg">the</p>
                <p className="text-xl text-center md:text-2xl lg:text-3xl">c o n c e p t</p>
                <p className="text-sm text-center md:text-md lg:text-lg">of</p>
                <p className="text-xl text-center md:text-2xl lg:text-3xl">s h o p p i n g</p>
            </div>
            <div className="absolute left-1/2 -translate-y-1/2 bottom-6 animate-bounce">
                <Link href="#products">
                    <RxDoubleArrowDown />
                </Link>
            </div>
        </section> 
    )
}
