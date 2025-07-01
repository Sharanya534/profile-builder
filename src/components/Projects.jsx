import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack web application with React and Node.js',
      tech: 'React, Node.js, MongoDB',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Responsive web app for project management',
      tech: 'Vue.js, Express, PostgreSQL',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tech: 'JavaScript, API Integration, Chart.js',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">{project.tech}</div>
              <a href={project.link} className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects