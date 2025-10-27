import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductsGrid from '../components/ProductsGrid'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

 function Home(){
return (
<>
<Header />
<main className="container my-5">
<Hero />
<ProductsGrid />
<Contact />
</main>
<Footer />
</>
)
}

export default Home