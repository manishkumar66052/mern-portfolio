
import Hero from "../components/Hero"
import Expertise from "../components/Expertise"
import Highlights from "../components/Highlights"

function Home(){
 return(
  <>
  
   <Hero/>
   <Expertise/>
   <Highlights/>
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

export default Home