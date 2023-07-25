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
        <div className="max-w-5xl mx-auto px-6 md:px-2 py-48">
            <div className="flex items-center space-x-6">
                <button type='button'
                    onClick={navigatePrev}
                    className="border border-gray-300 rounded-full p-2"
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
                    className="border border-gray-300 rounded-full p-2"
                >
                    <BsArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Testimonials