import React from 'react'


export default function Contact(){
return (
<section id="contact" className="bg-light p-4 rounded my-5">
<h3>Get in touch</h3>
<p className="text-muted">Questions? Reach out and we'll get back within 24 hours.</p>
<form className="row g-3 mt-2">
<div className="col-md-6">
<input type="text" placeholder="Your name" className="form-control" />
</div>
<div className="col-md-6">
<input type="email" placeholder="Your email" className="form-control" />
</div>
<div className="col-12">
<textarea placeholder="Message" rows={4} className="form-control"></textarea>
</div>
<div className="col-12">
<button className="btn btn-warning text-white">Send</button>
</div>
</form>
</section>
)
}