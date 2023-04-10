import React from 'react'

import { BsStar } from 'react-icons/bs'

const Testimonials = () => {
  return (
    <>
    <section className="py-6 px-8 mt-12">
        <div className="flex flex-col space-y-12">
            {/* 1 */}
            <div className="flex flex-col items-center">
                <div className="flex text-3xl">
                    <BsStar /><BsStar /><BsStar /><BsStar /><BsStar />
                </div>
                <div className="text-xs py-2">5/5 stars</div>
                <div className="py-2 max-w-lg text-center">
                    The products provided by Abstract are a beacon of our society, 
                    and there's no place I'd rather get them!
                    <br />
                    <em>- Alex F.</em>
                </div>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center">
                <div className="flex text-3xl justify-center">
                    <BsStar /><BsStar /><BsStar /><BsStar /><BsStar />
                </div>
                <div className="text-xs py-2">5/5 stars</div>
                <div className="py-2 max-w-lg text-center">
                    The products arrived fast and hassle free! I'd recommend Abstract to anyone!
                    <br />
                    <em>- Logan H.</em>
                </div>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center">
                <div className="flex text-3xl justify-center">
                    <BsStar /><BsStar /><BsStar /><BsStar /><BsStar />
                </div>
                <div className="text-xs py-2">5/5 stars</div>
                <div className="py-2 max-w-lg text-center">
                    Customer support went above and beyond when I didn't receive my Buyer's Remorse! They're incredible!
                    <br />
                    <em>- Stephen A.</em>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Testimonials