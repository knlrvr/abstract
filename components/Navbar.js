import Link from 'next/link'
import { useContext } from 'react'
import {
    BsCart,
    BsHouse
} from 'react-icons/bs'
import { ProductsContext } from './ProductsContext';

export default function Navbar() {
    const {selectedProducts} = useContext(ProductsContext);

    return (
        <nav className="nav mt-2 py-2 px-4 md:px-8 lg:px-8 flex justify-between w-full">
            <h1 className="text-sm py-1 font-mono"> 
                A b s t r a c t . 
            </h1>
            <ul className="flex text-2xl space-x-4 mr-6 md:space-x-6 lg:space-x-8">
              <li>
                <Link href='/'>
                    <BsHouse />
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                    <BsCart />
                    <span className="cart text-sm absolute top-5 font-mono right-6 md:right-10"> 
                        {selectedProducts.length}
                    </span>
                </Link>
              </li>
            </ul>
        </nav>
    )
}