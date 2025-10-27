import React from 'react'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'


export default function Header(){
return (
<nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top">
<div className="container">
<a className="navbar-brand fw-bold" href="#">Food<span className="text-warning">Mart</span></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
</ul>
<div className="d-flex gap-2">
<button className="btn btn-outline-secondary">Login</button>
<button className="btn btn-warning text-white">Sign Up</button>
</div>
</div>
</div>
</nav>
)
}