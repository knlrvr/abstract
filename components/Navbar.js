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
            <Link href="/">
            <h1 className="text-sm py-1 font-mono"> 
                A b s t r a c t . 
            </h1>
            </Link>
            <ul className="flex text-2xl space-x-6 mr-6 md:space-x-8 lg:space-x-10">
              <li>
                <Link href='/login'>
                    <p className="text-xs md:text-sm py-1 border-b border-gray-600">
                        Log In
                    </p>
                </Link>
              </li>
              <li>
                <Link href='/signup'>
                    <p className="text-xs md:text-sm py-1 border-b border-gray-600">
                        Sign Up
                    </p>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                    <BsCart />
                    <span className="cart text-orange-300 text-sm absolute top-5 right-6 md:right-10"> 
                        {selectedProducts.length}
                    </span>
                </Link>
              </li>
            </ul>
        </nav>
    )
}