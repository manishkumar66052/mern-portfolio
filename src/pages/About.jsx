import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";


function About(){

return(

<>

{/* Hero Section */}

<section className="bg-dark text-white text-center py-5">
<div className="container">

<h1 className="fw-bold">
MERN Stack Developer
</h1>

<p className="lead">
Building Scalable & Production Ready Web Applications
</p>

</div>
</section>


{/* About Section */}

<section className="py-5">
<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h2>About Me</h2>

<p>
Hi, I'm <strong>Manish Kumar</strong>, a passionate MERN Stack Developer
with hands on experience in building full stack applications using
<strong> MongoDB, Express.js, React.js and Node.js</strong>.
</p>

<p>
I specialize in developing responsive frontend interfaces and
scalable backend APIs.
</p>

</div>


<div className="col-md-6 text-center">

<FontAwesomeIcon icon={faCode} size="6x" className="text-primary" />

</div>

</div>
</div>
</section>


{/* MERN Stack */}

<section className="bg-light py-5">

<div className="container">

<h2 className="text-center mb-4">
My MERN Stack
</h2>

<div className="row g-4 text-center">

<div className="col-md-3">
<div className="card shadow-sm p-4 h-100">
<h5 className="text-success">MongoDB</h5>
<p>NoSQL Database Management</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow-sm p-4 h-100">
<h5 className="text-dark">Express.js</h5>
<p>Backend API Development</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow-sm p-4 h-100">
<h5 className="text-primary">React.js</h5>
<p>Frontend UI Development</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow-sm p-4 h-100">
<h5 className="text-success">Node.js</h5>
<p>Server Side Development</p>
</div>
</div>

</div>
</div>
</section>


{/* Additional Skills */}

<section className="py-5">

<div className="container">

<h2 className="text-center mb-4">
Additional Skills
</h2>

<div className="row g-3 text-center">

<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">HTML5</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">CSS3</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">JavaScript</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">REST APIs</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">JWT Auth</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">Git & GitHub</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">Deployment</div></div>
<div className="col-6 col-md-3"><div className="card p-3 shadow-sm">MongoDB Atlas</div></div>

</div>
</div>
</section>

<section className="bg-dark text-white py-5 text-center">

<div className="container">

<h2>Let's Work Together</h2>

<p>Open to Full-Time & Internship Opportunities</p>

<p>📧 manish24076@gmail.com</p>

<p>
<a className="text-white" href="https://www.linkedin.com">
LinkedIn
</a>
</p>

<p>
<a className="text-white" href="https://github.com">
GitHub
</a>
</p>

</div>

</section>

</>



)

}

export default About