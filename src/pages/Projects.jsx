import Footersec from "../components/Footersec"

const projects = [

{
title: "Calculator",
desc: "Simple calculator built using HTML, CSS and JavaScript.",
live: "https://manishkumar66052.github.io/Calculator/",
github: "#"
},

{
title: "Netflix Clone",
desc: "Netflix UI clone built with HTML, CSS and JavaScript.",
live: "https://manishkumar66052.github.io/movie-clone-project/",
github: "#"
},

{
title: "Food Website",
desc: "Responsive food ordering website UI.",
live: "https://mern-food-app-coral.vercel.app/",
github: "#"
},

{
title: "E-commerce Website",
desc: "Frontend e-commerce UI with product layout.",
live: "https://manishkumar66052.github.io/T-NIKE/",
github: "#"
},

{
title: "Survey Analytics Dashboard",
desc: "React dashboard for dynamic survey analytics.",
live: "https://dynamic-survey-dashboards.vercel.app/",
github: "#"
}

]

function Projects() {

return (

<div className="container py-5">

<h1 className="text-center fw-bold mb-4">
My Projects
</h1>

<p className="text-center text-muted mb-5">
Some of the projects I have built using HTML, CSS, JavaScript and React.
</p>

<div className="row g-4">

{projects.map((project,index)=>(

<div className="col-md-6 col-lg-4" key={index}>

<div className="card shadow h-100 border-0">

<div className="card-body text-center">

<h5 className="fw-bold">
{project.title}
</h5>

<p className="text-muted">
{project.desc}
</p>

<div className="d-flex justify-content-center gap-2 mt-3">

<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
className="btn btn-primary"
>

Live Demo

</a>

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="btn btn-dark"
>

GitHub

</a>

</div>

</div>

</div>

</div>

))}

</div>



</div>

)

}

export default Projects
