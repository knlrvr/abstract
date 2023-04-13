import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState();
  const [phrase, setPhrase] = useState();

  useEffect(() => {
    fetch('api/products')
    .then(response => response.json())
    .then(json => setProductsInfo(json));
  },[]);

  const categoriesNames = [...new Set(productsInfo?.map(p => p.category))];
  
  let products; 
  if (phrase) {
    products = productsInfo.filter(p => p.name.toLowerCase().includes(phrase))
  } else {
    products = productsInfo;
  }

  return (
    <>
      <Head>
        <title>ABSTRACT</title>
        <meta name="description" content="Abstract. The concept of shopping." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <section id="products">
          <div className="p-4 mt-24">
          <div className="flex justify-center">
                <p className="font-bold tracking-widest text-xl text-gray-500">Product Spotlight</p>
              </div>
            <div className="flex justify-center mb-12 mt-4">
              <div className="w-64 border border-gray-600 p-4 rounded-lg shadow-xl">
                <div className="p-2 rounded-xl h-48">
                    <Image 
                        src="https://images.unsplash.com/photo-1617791160588-241658c0f566"
                        alt="product picture" 
                        width="1000"
                        height="0"
                        className="rounded-xl"
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-md h-12 font-semibold">Profit Consumerism</h3>
                </div>
                <p className="font-thin mt-1 h-24">Push advancement through perpetuating poverty! If you don&apos;t have it, you&apos;re an outsider! Shun!</p>
                <div className="flex mt-4 mr-2">
                    <div className="text-sm grow text-gray-400 text-center uppercase">coming soon</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-12">
              <input 
                value={phrase}
                onChange={e => setPhrase(e.target.value)}
                type="text"
                placeholder="Search All Products"
                className="bg-gray-100 w-64 md:w-80 lg:w-100 py-2 px-4 rounded-full"
              />
            </div>
            <h5 className="text-center text-gray-400">AVAILABLE PRODUCTS</h5>
            <div className="max-w-5xl mx-auto">
              {categoriesNames.map(categoryName => ( 
                <div key={categoryName}>
                  {products.find(p => p.category === categoryName) && (
                    <div id="products">
                      <h2 className="mb-4"></h2>
                      <div className="flex flex-wrap justify-center gap-12">
                        {products.filter(p => p.category === categoryName).map(productInfo => (
                        <div key={productInfo._id} className="px-6">
                          <Product {...productInfo} />
                        </div>
                      ))}
                    </div>
                  </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
