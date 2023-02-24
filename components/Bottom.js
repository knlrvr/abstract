import Link from 'next/link'

import {
    BsArrowRight,
    BsEnvelope,
    BsTelephone,
    BsPinMap
} from 'react-icons/bs'

export default function Bottom() { 
    return (
        <>
        <section className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto mt-12 group">
            <div className="col-span-2 row-span-3 w-full h-full border rounded-lg p-6 space-y-8 shadow-lg place-items-center flex flex-col justify-center items-center
                            from-teal-300 to-orange-300 bg-gradient-to-r text-white">
                <h1 className="text-3xl font-thin">
                    Products delivered right to your amygdala!
                </h1>
                <h3 className="text-lg font-thin">
                    The best part of participating in consumerism is the privilege
                    of knowing you get far more than you pay for! 
                    <br /><br /> 
                    <span className="font-bold">
                        We offer more than a product.
                        We offer the guarantee that you&apos;ll regret it.
                    </span> 
                </h3>
            </div>
            <div className="row-span-1 w-full p-2 h-full border rounded-lg shadow-md flex flex-col justify-center items-center text-center space-y-4
                            from-orange-500 to-purple-800 bg-gradient-to-r text-white">
                <h4 className="text-2xl font-thin">
                    Shop now for the latest products!
                </h4>
                <Link href="/#products">
                    <BsArrowRight />
                </Link>
            </div>
            <div className="row-span-1 w-full p-2 h-full border rounded-md shadow-md flex flex-col justify-center items-center text-center space-y-12
                            from-red-300 to-orange-200 bg-gradient-to-r text-white">
                <h4 className="text-2xl font-thin">
                    View Your Cart
                </h4>
                <Link href="/cart">
                    <BsArrowRight />
                </Link>
            </div>
            <div className="col-span-2 row-span-2 w-full p-2 h-full flex flex-col justify-center items-center text-center space-y-12 text-lg font-thin">
                Have questions? We&apos;re here to help!
                <br /><br />
                Contact us via your preferred method and we&apos;ll get back to you as quickly as we can!
                <div className="flex space-x-8 md:space-x-24">
                    <div className="flex flex-col items-center">
                    <BsTelephone 
                        className="text-blue-300 text-2xl" /> 
                    <p className="mt-2 text-sm">+1 800 NOT REAL</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <BsEnvelope 
                        className="text-blue-300 text-2xl" /> 
                    <p className="mt-2 text-sm">help@abstract</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <BsPinMap 
                        className="text-blue-300 text-2xl" /> 
                    <p className="mt-2 text-sm">Nowhere, USA</p>
                    </div>
                </div>
            </div> 
        </section>

        <div className="text-sm font-thin mt-24 mb-2 flex flex-col md:flex-row text-center justify-between px-8">
            <div className="">
                &copy; ABSTRACT. Store 2023.
            </div>
            <div className="text-sm space-x-8 flex mt-4 md:mt-0">
                <span>
                    <Link href="/#hero" className="hover:text-orange-300">Back To Top</Link>
                </span>
                <span className="hover:text-orange-300 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-orange-300 cursor-pointer">Terms Of Use</span>
                <span className="hover:text-orange-300 cursor-pointer">Cookie Preferences</span>
            </div>
        </div>
        </>
    )
}
