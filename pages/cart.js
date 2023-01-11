import {useContext, useEffect, useState} from "react";
import Image from 'next/image'
import {ProductsContext} from "../components/ProductsContext";
import Navbar from '../components/Navbar'
import {
    BsChevronDown,
    BsChevronUp,
} from 'react-icons/bs'

export default function CheckoutPage() {
  const {selectedProducts,setSelectedProducts} = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids='+uniqIds.join(','))
      .then(response => response.json())
      .then(json => setProductsInfos(json));
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

  const deliveryPrice = Math.floor(Math.random() * 10);
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find(p => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <>
    <Navbar />
    {/**
      {!productsInfos.length && (
        <div>Cart is empty. Start shopping!</div>
      )}
     */}
      {productsInfos.length && productsInfos.map(productInfo => {
        const amount = selectedProducts.filter(id => id === productInfo._id).length;
        if (amount === 0) return;
        return (
        <div className="max-w-xl mx-auto mt-24" key={productInfo._id}>
          <div className="p-4 rounded-xl float-left">
            <Image className="w-24 rounded-xl" src={productInfo.picture} alt=""/>
          </div>
          <div className="pl-8 items-center">
            <h3 className="font-bold text-lg">{productInfo.name}</h3>
            <p className="text-sm text-gray-500">{productInfo.description}</p>
            <div className="flex mt-1">
              <div className="grow font-bold">${productInfo.price}</div>
              <div className="mt-6">
                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-blue-300 px-2 p-1 rounded-lg text-blue-300">
                    <BsChevronDown />
                </button>
                <span className="px-6">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-blue-400 px-2 p-1 rounded-lg text-white">
                    <BsChevronUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      )})}
      <form action="/api/cart" 
        method="POST" 
        className="p-12 max-w-4xl mx-auto">
        <div className="mt-8">
          <input 
            name="name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4" 
            type="text" 
            placeholder="Name"
          />
          <input 
            name="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4" 
            type="email" 
            placeholder="Email"
          />
        </div>
        <div className="mt-8">
          <div className="flex my-3">
            <h3 className="grow font-thin text-gray-400">Subtotal:</h3>
            <h3 className="font-thin">${subtotal}</h3>
          </div>
          <div className="flex my-3">
            <h3 className="grow font-thin text-gray-400">Delivery:</h3>
            <h3 className="font-thin">${deliveryPrice}</h3>
          </div>
          <div className="flex my-3 pt-3">
            <h3 className="grow font-thin text-gray-400">Total:</h3>
            <h3 className="font-thin">${total}</h3>
          </div>
        </div>
        <input type="hidden" name="products" value={selectedProducts.join(',')}/>
        <button type="submit" className="bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 float-right">Checkout</button>
      </form>
    </>
  );
}