import React from 'react'
import Image from 'next/image'
import { 
    BsArrowDown,
    BsTruck,
    BsBoxSeam,
    BsFillCreditCard2BackFill 
} from 'react-icons/bs'

const About = () => {
  return (
    <section className="bg-[#222] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-16 hidden md:block">
                    <Image 
                        src="https://images.unsplash.com/photo-1637511626493-bef85b22d1d5"
                        alt=""
                        width="1000"
                        height="1000"
                        className="rounded-l-full rounded-t-full"
                    />
                </div>
                <div className="flex flex-col justify-center relative px-2 md:px-16 py-8">
                    <div className="flex items-center justify-between p-4 border-gray-400 border-t">
                        <BsTruck 
                            className="text-4xl text-white" />
                        <div className="flex flex-col text-right w-2/3">
                            <span className="font-bold uppercase text-xl mb-4">free shipping</span>
                            <p className="font-light text-sm">Free shipping on all US orders or orders above $1,000,000. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-gray-400 border-t border-b p-4">
                        <BsBoxSeam 
                            className="text-4xl text-white" />
                        <div className="flex flex-col text-right w-2/3">
                            <span className="font-bold uppercase text-xl mb-4">90 day returns</span>
                            <p className="font-light text-sm"> Simply return your item within 90 days for a full refund.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border-gray-400 border-b">
                        <BsFillCreditCard2BackFill
                            className="text-4xl text-white" />
                        <div className="flex flex-col text-right w-2/3">
                            <span className="font-bold uppercase text-xl mb-4">secure payments</span>
                            <p className="font-light text-sm"> All payments are secured & encrypted for your protection. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About