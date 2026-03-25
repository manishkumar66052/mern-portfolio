import { Typewriter } from "react-simple-typewriter"

function Hero(){

return(

<section
data-aos="fade-up"
className="text-white py-5"
style={{
background:"linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
}}
>

<div className="container">

<div className="row align-items-center">

{/* LEFT CONTENT */}

<div className="col-lg-6" data-aos="fade-right">

<h1 className="display-4 fw-bold">
Hi, I'm Manish Kumar
</h1>

<h2 className="text-info mb-3">

<Typewriter
words={[
"MERN Stack Developer",
"Full Stack Developer",
"React Developer"
]}
loop={true}
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={50}
/>

</h2>

<p className="lead">
I design and develop scalable web applications using
MongoDB, Express, React and Node.js.
</p>

<div className="mt-4">

<a
href="https://github.com/manish24076"
target="_blank"
className="btn btn-light me-3"
>
GitHub
</a>

<a
href="https://www.linkedin.com"
target="_blank"
className="btn btn-info"
>
LinkedIn
</a>

</div>

</div>


{/* RIGHT IMAGE */}

<div className="col-lg-6 text-center" data-aos="zoom-in">

<img
src="/Profile.jpg"
className="img-fluid rounded-circle shadow-lg border border-4 border-light hero-img"
style={{maxWidth:"300px"}}
alt="Manish Kumar"
/>

</div>

</div>

</div>

</section>

)

}

export default Hero