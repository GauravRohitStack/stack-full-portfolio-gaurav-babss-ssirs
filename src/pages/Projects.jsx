import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div style={{ padding: "60px" }}>

      <h1>My Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
        />
      ))}

    </div>
  );
}

export default Projects;