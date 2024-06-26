import {useContext, useEffect, useState} from "react";
import Image from 'next/image'
import {ProductsContext} from "../components/ProductsContext";
import Navbar from '../components/Navbar'
import {
    BsChevronDown,
    BsChevronUp,
    BsTrash,
    BsPlus,
    BsDash
} from 'react-icons/bs'
import Link from 'next/link'

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids='+uniqIds.join(','))
      .then(response => response.json())
      .then(json => setProductsInfo(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts(prev => [...prev,id]);
  }
  
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts( prev => {
        return prev.filter((value, index) => index !== pos);
      });
    }
  }

  function removeProduct(id) {
    setSelectedProducts(prev => prev.filter(productId => productId !== id));
  }
  
  let taxPrice = 0;
  let subtotal = 0;

  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfo.find(p => p._id === id)?.price || 0;
      subtotal += price;
    }
    taxPrice = subtotal * 0.0725; // Calculate tax as 7.25% of the cart total
  }

  const total = subtotal + taxPrice;

  return (
    <div className="relative">
    <Navbar />
    <div className="w-full h-36 rounded-[2.5rem] absolute -top-14 bg-[#fbefe5] -z-10"></div>
    <div className="flex justify-center text-sm font-thin mt-16">
      
      {selectedProducts.length === 0 ? (
        <p>Cart is empty!</p>
      ) : (
        <p>Cart</p>
      )}
    </div>

    {selectedProducts.length === 0 && (
      <div className="flex flex-col items-center justify-center mt-12 space-y-12">
        <Link href='/#products' className="text-sm underline underline-offset-4 text-[#553666]">
          Click here to continue shopping &rarr;
        </Link>
      </div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto pb-12">
      <div className="">
        
        {productsInfo.length && productsInfo.map(productInfo => {
          const amount = selectedProducts.filter(id => id === productInfo._id).length;
          if (amount === 0) return;
          return (
          <div className="max-w-5xl mx-auto px-4 mt-12" key={productInfo._id}>
            <div className="mt-1.5 rounded-xl float-left">
              <Image className="w-24 rounded-xl" 
                  src={productInfo.picture} 
                  alt=""
                  width="1000"
                  height="0"
              />
            </div>
            <div className="pl-6 flex flex-col items-start">
              <h3 className="font-bold text-lg">{productInfo.name}</h3>
              <p className="text-sm text-gray-500">{productInfo.description}</p>
              <div className="grow mt-6 font-light">${productInfo.price}</div>
              <div className="flex items-center justify-between w-full mt-6 pb-8">
                <div className="">
                  <button type="button"
                    onClick={() => lessOfThisProduct(productInfo._id)} 
                    className="border border-[#553666] px-1 p-1 rounded-full text-[#553666]">
                    <BsDash />
                  </button>
                  <span className="px-6 font-light">
                    {selectedProducts.filter(id => id === productInfo._id).length}
                  </span>
                  <button type="button"
                    onClick={() => moreOfThisProduct(productInfo._id)} 
                    className="bg-[#553666] px-1 p-1 rounded-full text-white">
                    <BsPlus />
                  </button> 
                </div>
                <div className="">
                  <button type="button"
                    onClick={() => removeProduct(productInfo._id)}
                    className="text-red-400 text-lg mt-1.5">
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>

      {selectedProducts.length > 0 && (
        <div className="pt-12 px-4 md:pl-8 md:pr-4 md:fixed right-4 md:w-1/2">
          <form action="/" 
            method="POST" 
            className="px-4 border border-gray-400 bg-gray-50 shadow-lg">
            <div className="mt-8">
              <div className="flex my-3">
                <h3 className="grow font-thin text-gray-400">Subtotal:</h3>
                <h3 className="font-light">${subtotal}</h3>
              </div>
              <div className="flex my-3">
                <h3 className="grow font-thin text-gray-400">Tax:</h3>
                <h3 className="font-light">${taxPrice.toFixed(2)}</h3>
              </div>
              <div className="flex my-3 pt-4">
                <h3 className="grow font-thin text-gray-400">Total:</h3>
                <h3 className="font-bold">${total.toFixed(2)}</h3>
              </div>
            </div>
            <input type="hidden" 
              name="products" 
              value={selectedProducts.join(',')}
            />
            <Link href="/#products">
              <p className="text-xs font-light text-center mb-2 mt-8 hover:text-[#553666] hover:underline underline-offset-4">Need something else? Click here to continue shopping!</p>
            </Link>
            <div className="flex justify-between space-x-12">
              <button type="submit" 
                className="text-xs bg-[#444] hover:bg-[#222] px-5 py-2 rounded-xl font-thin text-white my-4 float-right transition duration-200">
                Guest Checkout
              </button>
              <button type="submit" 
                className="text-xs bg-[#553666] hover:bg-[#222] px-5 py-2 rounded-xl font-thin text-white my-4 float-right transition duration-200">
                Log In & Checkout
              </button>
            </div>
          </form>
        </div>
        )}
      </div>
    </div>
  );
}