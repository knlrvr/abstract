import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Testimonials = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const customerData = [
        {
            stars: '5/5',
            customer: 'Alex F',
            quote: 'The products provided by Abstract are a beacon of our society, and there\'s no place I\'d rather get them!'
        },
        {
            stars: '5/5',
            customer: 'Logan H',
            quote: 'The products arrived fast and hassle free! I\'d recommend Abstract to anyone!'
        },
        {
            stars: '5/5',
            customer: 'Stephen A',
            quote: 'Customer support went above and beyond when I didn\'t receive my Buyer\'s Remorse! The Abstract team is incredible!'
        },
        {
            stars: '5/5',
            customer: 'Sarah T',
            quote: 'There\'s no place else I\'d rather go to receive my wasteful consumption. Simply wonderful.'
        },
    ];

    const navigateNext = () => {
        setCurrentCard((prevCard) => ( prevCard +1 ) % customerData.length);
    };

    const navigatePrev = () => {
        setCurrentCard((prevCard) => prevCard === 0 ? customerData.length - 1: prevCard - 1);
    };

    return (
        <div className="pt-16 -mb-32">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-4.000000, 76.000000)" fill="#fbefe5" fill-rule="nonzero">
                        <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                    </g>
                </g>
            </svg>

            <div className="bg-[#fbefe5] pb-16">
                <div className="max-w-5xl mx-auto px-6 md:px-2 py-24">
                    <div className="flex items-center space-x-6">
                        <button type='button'
                            onClick={navigatePrev}
                            className="border border-[#553666] rounded-full p-2 text-[#553666] hover:bg-[#553666] hover:text-[#fbefe5] transition-colors duration-200"
                        >
                            <BsArrowLeft />
                        </button>
                        <TestimonialCard
                            stars={customerData[currentCard].stars}
                            customer={customerData[currentCard].customer}
                            quote={customerData[currentCard].quote}
                        />
                        <button type="button"
                            onClick={navigateNext}
                            className="border border-[#553666] rounded-full p-2 text-[#553666] hover:bg-[#553666] hover:text-[#fbefe5] transition-colors duration-200"
                        >
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials