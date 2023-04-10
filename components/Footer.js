import Link from 'next/link'

import {
    BsGithub,
    BsLinkedin,
    BsTwitter,
    BsInstagram,
    BsFacebook
} from 'react-icons/bs'

export default function Bottom() {
    return (
        <>
        <section className="py-4 px-4 max-w-5xl mx-auto bg-blue-100">
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
                        className="focus:outline-none font-thin rounded-md p-1 px-2 mb-2"
                    />
                    <button 
                        className="bg-blue-200 rounded-md p-1 hover:bg-blue-300 transition duration-200">
                        Submit
                    </button>
                    <div className="flex py-6 justify-between text-blue-300">
                        <Link href="https://github.com/knlrvr/abstract" target="_blank"
                            className='hover:text-gray-400 transition duration-200'>
                            <BsGithub />
                        </Link>
                        <Link href="https://linkedin.com/in/kane-lariviere" target="_blank"
                            className='hover:text-gray-400 transition duration-200'>
                            <BsLinkedin />
                        </Link>
                        <Link href="https://facebook.com" target="_blank"
                            className='hover:text-gray-400 transition duration-200'>
                            <BsFacebook />
                        </Link>
                        <Link href="https://twitter.com/knlrvr" target="_blank"
                            className='hover:text-gray-400 transition duration-200'>
                            <BsTwitter />
                        </Link>
                        <Link href="https://instagram.com/kanelarivieresucks" target="_blank"
                            className='hover:text-gray-400 transition duration-200'>
                            <BsInstagram />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-8 justify-between">
                    <div className="flex flex-col font-thin">
                        <span className="font-semibold">Support</span>
                        <div className="">
                            <Link href="/login"
                                className='hover:text-gray-400 transition duration-200'>
                                <p>FAQ</p>
                            </Link>
                            <Link href="/login"
                                className='hover:text-gray-400 transition duration-200'>
                                <p>Order Status</p>
                            </Link>
                            <Link href="/login"
                                className='hover:text-gray-400 transition duration-200'>
                                <p>Shipping & Delivery</p>
                            </Link>
                            <Link href="/login"
                                className='hover:text-gray-400 transition duration-200'>
                                <p>Request Catalog</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col font-thin">
                        <span className="font-semibold">Company</span>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>About Us</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Contact Us</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Abstract Experiences</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Visit A Store</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Affiliates</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Partners</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Suppliers</p>
                        </Link>
                        <Link href="/login"
                            className='hover:text-gray-400 transition duration-200'>
                            <p>Advertising</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-8">
                <p>&copy; Abstract Store</p>
                <Link href="https://github.com/knlrvr" 
                    className="hover:text-gray-300">
                    <p> KNLRVR </p>
                </Link>
            </div>
        </section>
        </>
    )
}