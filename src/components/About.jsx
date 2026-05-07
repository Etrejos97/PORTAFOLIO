function About() {
  return (
    <section id="about" className="section-spacing" data-aos="fade-up">
      <div className="container">
        <div className="card-dark p-4 p-md-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <h2 className="mb-3">Sobre mí</h2>
              <p className="text-secondary mb-3">
                Soy estudiante de Tecnología en Sistemas (5to semestre), certificado en IA
                por MinTic. Combino más de cinco años de experiencia comercial con bases
                técnicas sólidas en arquitectura de software y desarrollo Full-Stack.
              </p>
              <p className="text-secondary mb-0">
                Lidero proyectos bajo Scrum, priorizando entrega de valor, colaboración
                efectiva y soluciones centradas en el usuario final.
              </p>
            </div>
            <div className="col-lg-5">
              <ul className="list-group list-group-flush card-dark-list">
                <li className="list-group-item">Ubicación: Medellín, Colombia</li>
                <li className="list-group-item">Disponibilidad para prácticas: Sí</li>
                <li className="list-group-item">Certificación: IA MinTic</li>
                <li className="list-group-item">Metodologías: Scrum y trabajo ágil</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
