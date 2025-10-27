import React from 'react'


export default function Footer(){
return (
<footer className="border-top py-3 text-center text-muted small">
<div className="container">© {new Date().getFullYear()} FoodMart | Privacy | Terms</div>
</footer>
)
}