import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {

const [dark,setDark] = useState(false)

useEffect(()=>{

if(dark){
document.body.classList.add("dark")
}else{
document.body.classList.remove("dark")
}

},[dark])

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">

<div className="container">

<Link className="navbar-brand fw-bold fs-4" to="/">
Manish Kumar
</Link>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#nav"
>

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse justify-content-end" id="nav">

<ul className="navbar-nav align-items-center">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/about">About</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/projects">Projects</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>

<li className="nav-item ms-3">

<button
className="btn btn-light btn-sm"
onClick={()=>setDark(!dark)}
>

{dark ? "☀️ Light" : "🌙 Dark"}

</button>

</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar