function Hero() {
  return (
    <section id="hero" className="section-spacing hero-fullscreen" data-aos="fade-up">
      <div className="container h-100 d-flex align-items-center">
        <div className="hero-card text-center p-4 p-md-5 w-100">
          <img
            src="/assets/images/EdisonTrejos1.jpg"
            alt="Edison Trejos"
            className="hero-photo mb-4"
          />
          <h1 className="display-5 fw-bold mb-3">Edison Esneider Trejos Páez</h1>
          <p className="lead text-primary mb-2">
            Full-Stack Developer | Product-Minded Engineer
          </p>
          <p className="text-secondary mb-4">
            Construyo productos escalables con enfoque técnico, agilidad y experiencia de
            usuario.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a
              href="https://linkedin.com/in/edison-trejos-dev"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Etrejos97"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
