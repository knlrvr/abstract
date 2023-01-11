import Image from 'next/image'
import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ProductsContext } from './ProductsContext';

export default function Product({_id,name,price,description,picture}) {
    const {setSelectedProducts} = useContext(ProductsContext);
    function addProduct() {
        setSelectedProducts(prev => [...prev, _id]);
    }

    return (
        <div className="w-64 border p-4 rounded-lg shadow-md">
            <div className="p-2 rounded-xl h-48">
                <Image 
                    src={picture} 
                    alt="product picture" 
                    width="1000"
                    height="0"
                    className="rounded-xl"
                />
            </div>
            <div className="mt-2">
                <h3 className="text-md h-12">{name}</h3>
            </div>
            <p className="font-thin mt-1 h-24">{description}</p>
            <div className="flex mt-4 mr-2">
                <div className="text-xl grow">${price}</div>
                <button onClick={addProduct}
                    className="bg-blue-400 py-2 px-5 rounded-full hover:bg-blue-300 text-white transition ease-in-out duration-400 hover:shadow-lg hover:shadow-gray-600 hover:shadow-rounded">
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    );
}