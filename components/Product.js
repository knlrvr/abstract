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
        }, 3000);
    }

    return (
        <>
            <div className="w-full md:w-64 border p-4 border-gray-300 rounded-xl hover:shadow-lg transition duration-200 bg-gray-50 flex flex-col">
                <div className="rounded-md w-full h-fit overflow-hidden">
                    <Image 
                        src={picture} 
                        alt="product picture" 
                        width="1000"
                        height="0"
                        className="h-48 md:h-36"
                    />
                </div>
                <div className="mt-4">
                    <h3 className="text-md h-12 font-semibold tracking-widest">{name}</h3>
                </div>
                <p className="font-thin mt-1 h-24">{description}</p>
                <div className="flex mt-4 mr-2">
                    <div className="text-lg font-light grow">${price}</div>
                    {isActive? 
                    <button onClick={() => { onClick(); setIsActive(!isActive)}} 
                        className="bg-blue-400 py-2 px-5 rounded-full text-white transition ease-in-out duration-400">
                        <BsCheck2 />
                    </button> :
                    <button onClick={() => { onClick(); setIsActive(!isActive)}}
                        className="bg-blue-400 py-2 px-5 rounded-full hover:bg-blue-300 text-white transition ease-in-out duration-400 hover:shadow-md hover:shadow-gray-600 hover:shadow-rounded">
                        <AiOutlinePlus />
                    </button>
                    }
                </div>
            </div>
        </>
    );
}