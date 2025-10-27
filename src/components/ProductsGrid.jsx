import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'


export default function ProductsGrid(){
return (
<section id="products" className="my-5">
<h2 className="fw-bold mb-4">Popular Products</h2>
<div className="row g-4">
{products.map(p => (
<div key={p.id} className="col-12 col-sm-6 col-md-4">
<ProductCard product={p} />
</div>
))}
</div>
</section>
)
}