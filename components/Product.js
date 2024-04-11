import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { 
    AiOutlinePlus,
} from 'react-icons/ai'
import {
    BsCheck2
} from 'react-icons/bs'
import { ProductsContext } from './ProductsContext';

export default function Product({_id,name,price,description,picture}) {
    const {setSelectedProducts} = useContext(ProductsContext);
    function addProduct() {
        setSelectedProducts(prev => [...prev, _id]);
    }

    const [isActive, setIsActive] = useState(false);

    function onClick() {
        addProduct();
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 1000);
    }

    return (
        <>

            <div className="border p-4 border-[#222] hover:shadow-lg transition duration-200 bg-gray-50 flex flex-col space-y-4">
                <div className="h-full w-full flex justify-center">
                    <Image 
                        src={picture} 
                        alt="product picture" 
                        width="1000"
                        height="1000"
                        className="object-cover h-44 sm:h-48 md:h-56 lg:h-48 rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <p className="font-light tracking-wide">{name}</p>
                    <span className="font-semibold">${price}</span>
                </div>
                <div className="h-24">
                    <p className="font-thin">{description}</p>
                </div>

                <div className="flex justify-end">
                {isActive? 
                    <div className="flex items-center text-sm gap-[2.56rem] bg-[#222] text-white px-4 py-2 rounded-full
                        ">
                        <p className="text-xs">Added!</p>
                        <BsCheck2 className={`${isActive ? 'animate-ping' : ''}`}/>
                    </div> :
                    <button type="button"
                        onClick={() => { onClick(); setIsActive(!isActive)}}
                        className="flex items-center text-sm gap-4 bg-[#553666] text-white px-4 py-2 rounded-full hover:shadow-lg
                        ">
                        <p className="text-xs">Add to Cart</p>
                        <AiOutlinePlus className={`${isActive ? '' : ''}`} />
                    </button>
                    }
                </div>
            </div>

        </>
    );
}