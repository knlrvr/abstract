import React from 'react'
import Image from 'next/image'
import { BsArrowDown } from 'react-icons/bs'

const About = () => {
  return (
    <section className="bg-[#222] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-16">
                    <Image 
                        src="https://images.unsplash.com/photo-1637511626493-bef85b22d1d5"
                        alt=""
                        width="1000"
                        height="1000"
                        className="rounded-l-full rounded-t-full"
                    />
                </div>
                <div className="flex flex-col justify-center relative px-16 py-8">
                    <h3 className="text-3xl font-thin tracking-wide">
                        About Abstract
                    </h3>
                    <p className="text-sm py-4 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis 
                    rhoncus urna neque viverra justo. Non consectetur a erat nam at lectus urna duis. 
                    Consectetur adipiscing elit ut aliquam purus sit amet luctus. Tristique senectus 
                    et netus et malesuada. Sit amet risus nullam eget. <br /><br />Morbi tincidunt ornare massa 
                    eget egestas purus viverra. Proin sagittis nisl rhoncus mattis rhoncus. Orci ac 
                    auctor augue mauris augue neque gravida in fermentum. Vulputate enim nulla 
                    aliquet porttitor lacus. Mattis aliquam faucibus purus in massa tempor nec feugiat 
                    nisl. In hendrerit gravida rutrum quisque non tellus orci. Velit ut tortor pretium 
                    viverra suspendisse. Morbi leo urna molestie at elementum eu facilisis sed. <br /><br />
                    <span className="font-semibold">Feugiat scelerisque varius morbi enim nunc.</span>
                    </p>

                    <div className="absolute bottom-4 right-0">
                        <BsArrowDown />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About