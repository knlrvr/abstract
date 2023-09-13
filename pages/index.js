import Head from 'next/head'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import About from '../components/About'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState();
  const [phrase, setPhrase] = useState();

  const [visibleProducts, setVisibleProducts] = useState();

  const loadMore = () => {
    setVisibleProducts(products.length);
  };

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
          <div className="p-4 mt-6">

            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center">
                <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest pb-8 text-center">
                  Shop the trendiest regret <br />you'll ever experience!
                </span>
              </div>
            </div>

            <div className="flex justify-start mb-12 max-w-5xl mx-auto pt-10 px-2">
              <input 
                value={phrase}
                onChange={e => setPhrase(e.target.value)}
                type="text"
                placeholder="Search All Products"
                className="bg-gray-100 w-full md:w-[19.5rem] py-2 px-4 rounded-full"
              />
            </div>

            <div className="max-w-5xl mx-auto px-2">
              {categoriesNames.map(categoryName => ( 
                <div key={categoryName}>
                  {products.find(p => p.category === categoryName) && (
                    <div id="products">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
                        {products.filter(p => p.category === categoryName).map(productInfo => (
                        <div key={productInfo._id} className="">
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
