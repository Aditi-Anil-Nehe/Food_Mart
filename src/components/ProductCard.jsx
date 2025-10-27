import React from 'react'


export default function ProductCard({product}){
return (
<div className="card h-100 shadow-sm">
<img src={product.img} className="card-img-top" alt={product.title} />
<div className="card-body">
<h5 className="card-title">{product.title}</h5>
<p className="card-text text-muted">{product.price}</p>
<div className="d-flex justify-content-between">
<button className="btn btn-outline-secondary btn-sm">Add</button>
<button className="btn btn-warning btn-sm text-white">Buy</button>
</div>
</div>
</div>
)
}