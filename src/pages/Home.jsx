
import { Link } from "react-router-dom"
import "../styles/home.css"

function Home(){

  return(

    <section className="hero">

      <h1>Java Full Stack Developer</h1>

      <p>
        I build scalable web applications using
        React, Java and Spring Boot
      </p>
      
      <div className="hero-buttons">

  
       <Link to="/projects" className="btn btn-primary">
       <button>
          View Projects
          </button>
        </Link>

        <Link to="/contact" className="btn btn-outline">
        <button>
          Contact Me
          </button>
        </Link>

      </div>

    </section>

  )
}

export default Home