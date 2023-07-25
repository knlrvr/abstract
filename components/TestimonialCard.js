import React from 'react'

import { BsStar } from 'react-icons/bs'

const TestimonialCard = ({ customer, quote, stars }) => {
  return (
    <div className="flex flex-col justify-between h-56 md:h-36 w-full">
        <div className="flex text-3xl justify-center">
            <BsStar /><BsStar /><BsStar /><BsStar /><BsStar />
        </div>
        <span className="flex justify-center text-gray-400 text-sm">
            {stars}
        </span>
        <p className="text-left md:text-center font-light">
            &quot; {quote} &quot;
        </p>
        <p className="text-left md:text-center font-light text-sm text-gray-400">
            &mdash; {customer} 
        </p>
    </div>
  )
}

export default TestimonialCard