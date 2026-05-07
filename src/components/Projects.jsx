const projects = [
  {
    name: 'proyectoaulaTendencias',
    description:
      'Plataforma Full-Stack para medir productividad y gestionar tareas en grupos de trabajo. MVP entregado en el tiempo estipulado con enfoque agil.',
    technologies: [
      'Python',
      'Django',
      'DRF',
      'PostgreSQL',
      'JWT',
      'Swagger',
      'React',
      'Vite',
    ],
    role: 'Lider de proyecto y desarrollador Full-Stack',
    github: 'https://github.com/Etrejos97/proyectoaulaTendencias20261',
    inProgress: false,
  },
  {
    name: 'Agente de Alertas de Precio',
    description:
      'Agente automatizado de alertas de precios con procesamiento asincrono de tareas.',
    technologies: ['Python', 'Django', 'Celery', 'PostgreSQL'],
    role: 'Desarrollador Full-Stack',
    github: 'https://github.com/Etrejos97/agente-alertas-precio',
    inProgress: true,
  },
]

function Projects() {
  return (
    <section id="projects" className="section-spacing" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-lg-6" key={project.name}>
              <div className="card-dark h-100 p-4">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                  <h3 className="h5 mb-0">{project.name}</h3>
                  {project.inProgress && (
                    <span className="badge rounded-pill text-bg-warning">En desarrollo</span>
                  )}
                </div>
                <p className="text-secondary mb-3">{project.description}</p>
                <p className="small text-secondary mb-3">
                  <strong>Rol:</strong> {project.role}
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span className="badge text-bg-primary" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  className="btn btn-outline-light"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
