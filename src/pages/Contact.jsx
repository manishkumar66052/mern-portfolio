import Footersec from "../components/Footersec"

function Contact(){

return(

<div>

{/* HERO */}

<section
data-aos="fade-up"
className="text-white text-center py-5"
style={{
background:"linear-gradient(135deg,#1f4037,#99f2c8)"
}}
>

<div className="container">

<h1 className="fw-bold">
Let's Connect
</h1>

<p className="lead">
Have a project in mind? I'd love to hear from you.
</p>

</div>

</section>


{/* CONTACT FORM */}

<section className="py-5">

<div className="container">

<div className="row justify-content-center">

<div className="col-lg-6">

<div
className="card shadow-lg p-4"
data-aos="zoom-in"
>

<h3 className="text-center mb-4">
Send a Message
</h3>

<form
action="https://formspree.io/f/YOUR_FORM_ID"
method="POST"
>

<div className="mb-3">

<label className="form-label">
Full Name
</label>

<input
type="text"
name="name"
className="form-control"
placeholder="Enter your name"
required
/>

</div>


<div className="mb-3">

<label className="form-label">
Email Address
</label>

<input
type="email"
name="email"
className="form-control"
placeholder="Enter your email"
required
/>

</div>


<div className="mb-3">

<label className="form-label">
Message
</label>

<textarea
name="message"
className="form-control"
rows="5"
placeholder="Write your message..."
required
></textarea>

</div>


<div className="d-grid">

<button
type="submit"
className="btn btn-dark"
>

Send Message

</button>

</div>

</form>

</div>

</div>

</div>

</div>

</section>

<Footersec />

</div>

)

}

export default Contact