import { FaCode, FaDatabase, FaJava, FaServer } from 'react-icons/fa'
import {
  SiDjango,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiVite,
} from 'react-icons/si'

const stackGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'Django REST Framework', icon: FaServer },
      { name: 'C#', icon: FaCode },
      { name: '.NET / ASP.NET Core', icon: FaServer },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Vite', icon: SiVite },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: SiHtml5 },
    ],
  },
  {
    title: 'Bases de Datos y DevOps',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL Server', icon: FaDatabase },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Swagger', icon: SiSwagger },
      { name: 'JWT', icon: SiJsonwebtokens },
    ],
  },
]

function Stack() {
  return (
    <section id="stack" className="section-spacing" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4">Stack Tecnológico</h2>
        <div className="row g-4">
          {stackGroups.map((group) => (
            <div className="col-12 col-lg-4" key={group.title}>
              <div className="card-dark h-100 p-4">
                <h3 className="h5 mb-3 text-primary">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <span className="tech-badge" key={item.name}>
                        <Icon />
                        {item.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
