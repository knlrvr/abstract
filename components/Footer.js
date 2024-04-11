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
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-4.000000, 76.000000)" fill="#222" fill-rule="nonzero">
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
            </g>
        </svg>

        <section className="bg-[#222] text-white">

            <div className="pt-12 pb-4 max-w-5xl mx-auto">
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
                            className="ring-1 ring-white font-light rounded-md p-1 px-2 mb-2 bg-[#333] md:bg-[#222] placeholder:text-[#777] "
                        />
                        <button 
                            className="bg-[#333] rounded-md p-1 hover:bg-[#444] transition duration-200">
                            Submit
                        </button>
                        <ul className="flex py-6 justify-between text-white">
                            <li>
                                <Link href="https://github.com/knlrvr/abstract" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <BsGithub />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com/in/kane-lariviere" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <BsLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://facebook.com" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <BsFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/knlrvr" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <BsTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com/kanelarivieresucks" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <BsInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com/" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
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
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>FAQ</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Order Status</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Shipping & Delivery</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Request Catalog</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col font-thin">
                            <span className="font-semibold">Company</span>
                            <ul className="">
                                <li>
                                <Link href="https://abstract-creative.vercel.app/" target="_blank"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Abstract Creative</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>About Us</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Contact Us</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Abstract Experiences</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Visit A Store</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Affiliates</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Partners</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Suppliers</p>
                                </Link>
                                </li>
                                <li>
                                <Link href="/login"
                                    className='hover:text-[#553666] transition duration-200'>
                                    <p>Advertising</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-xs font-light text-white mt-8 px-4 pb-8">
                    <p>&copy; 2024 Abstract Store. All Rights Reserved.</p>
                    <Link href="https://github.com/knlrvr" target="_blank"
                        className="hover:text-[#553666]">
                        <p> KNLRVR </p>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}