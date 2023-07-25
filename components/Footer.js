import Link from 'next/link'

import {
    BsGithub,
    BsLinkedin,
    BsTwitter,
    BsInstagram,
    BsFacebook,
    BsYoutube
} from 'react-icons/bs'

export default function Bottom() {
    return (
        <>
        <section className="bg-[#222] text-white">
            <div className="py-4 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="font-semibold flex flex-col p-6 mb-6">
                        Sign Up For Our Newsletter!
                        <p className="font-thin py-4 text-sm">
                            Sign up for our newsletter and be the first to know about new products, sales,
                            and more!
                        </p>
                        <input 
                            type="text"
                            placeholder="Email"
                            className="focus:outline-none ring-1 ring-white font-light rounded-md p-1 px-2 mb-2 bg-[#222] placeholder:text-[#777]"
                        />
                        <button 
                            className="bg-[#333] rounded-md p-1 hover:bg-[#444] transition duration-200">
                            Submit
                        </button>
                        <ul className="flex py-6 justify-between text-white">
                            <li>
                                <Link href="https://github.com/knlrvr/abstract" target="_blank"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <BsGithub />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com/in/kane-lariviere" target="_blank"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <BsLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://facebook.com" target="_blank"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <BsFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/knlrvr" target="_blank"
                                    className='hover:text-blue-300] transition duration-200'>
                                    <BsTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com/kanelarivieresucks" target="_blank"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <BsInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com/" target="_blank"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <BsYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-6 justify-between">
                        <div className="flex flex-col font-thin">
                            <span className="font-semibold">Support</span>
                            <ul className="">
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>FAQ</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Order Status</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Shipping & Delivery</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Request Catalog</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col font-thin">
                            <span className="font-semibold">Company</span>
                            <ul className="">
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>About Us</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Contact Us</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Abstract Experiences</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Visit A Store</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Affiliates</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Partners</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Suppliers</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-blue-300 transition duration-200'>
                                    <p>Advertising</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-xs font-light text-white mt-8 px-4">
                    <p>&copy; 2023 Abstract Store. All Rights Reserved.</p>
                    <Link href="https://github.com/knlrvr" 
                        className="hover:text-blue-300">
                        <p> KNLRVR </p>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}