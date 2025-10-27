import React from 'react'


export default function Hero(){
return (
<section className="row align-items-center my-5">
<div className="col-md-6">
<h1 className="display-5 fw-bold">Fresh groceries delivered to your door</h1>
<p className="text-muted my-3">High quality fruits, vegetables and pantry staples — sourced locally.</p>
<div className="input-group">
<input type="text" className="form-control" placeholder="Search products, e.g. apples" />
<button className="btn btn-warning text-white">Search</button>
</div>
</div>
<div className="col-md-6 text-center">
<img src="https://themewagon.github.io/FoodMart/images/product-thumb-1.png" alt="hero" className="img-fluid rounded shadow" />
</div>
</section>
)
}