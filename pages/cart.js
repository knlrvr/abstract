import {useContext, useEffect, useState} from "react";
import Image from 'next/image'
import {ProductsContext} from "../components/ProductsContext";
import Navbar from '../components/Navbar'
import {
    BsChevronDown,
    BsChevronUp,
} from 'react-icons/bs'
import Link from 'next/link'

export default function Cart() {
  const {selectedProducts,setSelectedProducts} = useContext(ProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
  
  let taxPrice = 0;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfo.find(p => p._id === id)?.price || 0;
      subtotal += price;
      taxPrice = Math.floor(Math.random() * 10);
    }
  }

  const total = subtotal + taxPrice;

  return (
    <>
    <Navbar />
    <div className="flex justify-center text-sm font-thin mt-12">Cart</div>

      {productsInfo.length && productsInfo.map(productInfo => {
        const amount = selectedProducts.filter(id => id === productInfo._id).length;
        if (amount === 0) return;
        return (
        <div className="max-w-xl mx-auto mt-4" key={productInfo._id}>
          <div className="p-3 rounded-xl float-left">
            <Image className="w-24 rounded-xl" 
                src={productInfo.picture} 
                alt=""
                width="1000"
                height="0"
            />
          </div>
          <div className="pl-8 items-center">
            <h3 className="font-bold text-lg">{productInfo.name}</h3>
            <p className="text-sm text-gray-500">{productInfo.description}</p>
            <div className="flex mt-1">
              <div className="grow mt-6 font-bold">${productInfo.price}</div>
              <div className="mt-6 pr-6">
                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-blue-300 px-1 p-1 rounded-full text-blue-300">
                    <BsChevronDown />
                </button>
                <span className="px-4">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-blue-400 px-1 p-1 rounded-full text-white">
                    <BsChevronUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      )})}
      <form action="/" 
        method="POST" 
        className="p-12 max-w-2xl mx-auto">
        <div className="mt-8">
          <div className="flex my-3">
            <h3 className="grow font-thin text-gray-400">Subtotal:</h3>
            <h3 className="font-thin">${subtotal}</h3>
          </div>
          <div className="flex my-3">
            <h3 className="grow font-thin text-gray-400">Tax:</h3>
            <h3 className="font-thin">${taxPrice}</h3>
          </div>
          <div className="flex my-3 pt-4">
            <h3 className="grow font-thin text-gray-400">Total:</h3>
            <h3 className="font-thin">${total}</h3>
          </div>
        </div>
        <input type="hidden" name="products" value={selectedProducts.join(',')}/>
          <Link href="/">
            <p className="text-xs text-center mb-2 mt-8">Need something else? Click to continue shopping!</p>
          </Link>
          <div className="flex justify-center space-x-12">
            <button type="submit" className="text-sm bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 float-right">
              Guest Checkout
            </button>
            <button type="submit" className="text-sm bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 float-right">
              Log In & Checkout
            </button>
          </div>
      </form>
    </>
  );
}