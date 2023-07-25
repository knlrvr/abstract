import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Features = () => {
  return (
    <>
        <section id="featured" className="max-w-5xl mx-auto px-6 md:px-2 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="h-fit w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1637952112301-6090dca83ccb"
                  alt=""
                  width="1000"
                  height="0"
                  className="h-80 object-cover"
                />
              </div>
              <div className="absolute top-1/3 left-6">
                <p className="text-white font-light text-3xl">
                  Looking for regret?
                </p>
                <span className="text-white font-light tracking-wide">Look no further.</span>
              </div>
              <div className="absolute bottom-12 left-6 border border-white">
                <Link href="#products" 
                  className="text-white font-light text-lg">
                  <p className="px-4 p-1 uppercase text-sm"> Shop Now </p>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="h-fit w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f"
                  alt=""
                  width="1000"
                  height="0"
                  className="h-80 object-cover"
                />
              </div>
              <div className="absolute top-1/3 left-6">
                <p className="text-white font-light text-3xl">
                  Consumer Culture?
                </p>
                <span className="text-white font-light tracking-wide">We&apos;ve got you covered.</span>
              </div>
              <div className="absolute bottom-12 left-6 border border-white">
                <Link href="#products" 
                  className="text-white font-light text-xl">
                  <p className="px-4 p-1 uppercase text-sm"> Shop Now </p>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1620207418302-439b387441b0"
                  alt=""
                  width="1000"
                  height="0"
                  className="h-80 object-cover"
                />
              </div>
              <div className="absolute top-1/3 left-6">
                <p className="text-white font-light text-3xl">
                  Just taking a look?
                </p>
                <span className="text-white font-light tracking-wide">Sure you are.</span>
              </div>
              <div className="absolute bottom-12 left-6 border border-white">
                <Link href="#products" 
                  className="text-white font-light text-xl">
                  <p className="px-4 p-1 uppercase text-sm"> Shop Now </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Features