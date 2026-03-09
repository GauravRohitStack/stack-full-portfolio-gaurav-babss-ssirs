
import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar(){

  return(

    <nav className="navbar">

      <div className="nav-container">

        <h2>My Portfolio</h2>

        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/skills">Skills</Link>

        </div>

      </div>

    </nav>

  )
}

export default Navbar