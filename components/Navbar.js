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
        <div className="bg-[#fbefe5]">
        <nav className="nav py-4 px-6 md:px-2 flex items-center justify-between max-w-5xl mx-auto">
            <Link href="/">
            <h1 className="text-sm py-1 font-mono"> 
                A b s t r a c t . 
            </h1>
            </Link>
            <ul className="flex text-2xl space-x-6 md:space-x-8 lg:space-x-10">
              <li>
                <Link href='/login'>
                    <p className="text-xs py-1 border-b border-[#222]">
                        Log In
                    </p>
                </Link>
              </li>
              <li>
                <Link href='/signup'>
                    <p className="text-xs py-1 border-b border-[#222]">
                        Sign Up
                    </p>
                </Link>
              </li>
              <li>
                <Link href='/cart' className="flex items-center">
                    <BsCart 
                        className="mr-2" />
                    <span className="cart text-[#553666] text-sm pt-1"> 
                        {selectedProducts.length}
                    </span>
                </Link>
              </li>
            </ul>
        </nav>
        </div>
    )
}