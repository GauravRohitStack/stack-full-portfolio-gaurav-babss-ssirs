function ProjectCard({ title, description, tech, github }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <h3>{title}</h3>

      <p>{description}</p>

      <p><strong>Tech:</strong> {tech}</p>

      <a href={github} target="_blank">
        View Code
      </a>
    </div>
  );
}

export default ProjectCard;