import "../styles/skills.css"

function Skills(){

  return(

    <section className="skills-container">

      <h2>My Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML, CSS</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Java, Spring Boot, REST APIs</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL, PostgreSQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman, Maven</p>
        </div>


        <div className="skill-card">
          <h3>Cloud</h3>
          <p>AWS, Azure, GCP</p>
        </div>


        <div className="skill-card">
          <h3>Platforms</h3>
          <p>Windows, UNIX, LINUX</p>
        </div>

    
        <div className="skill-card">
          <h3>Design Patterns</h3>
          <p>MVC, Singleton, Business Delegate and DAO patterns</p>
        </div>


         <div className="skill-card">
          <h3>Methodologies</h3>
          <p>Agile Methodology, RUP, Extreme Programming</p>
        </div>


      </div>

    </section>

  )
}

export default Skills