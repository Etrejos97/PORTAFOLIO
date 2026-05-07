import { Container, Nav, Navbar } from 'react-bootstrap'

function NavbarSection() {
  return (
    <Navbar
      expand="lg"
      className="navbar-dark bg-dark-subtle sticky-top border-bottom border-secondary-subtle"
    >
      <Container>
        <Navbar.Brand href="#hero" className="fw-semibold">
          Edison Trejos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#stack">Stack</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <a
              className="btn btn-primary mt-2 mt-lg-0 ms-lg-2"
              href="/assets/docs/CV_Edison_Trejos.pdf"
              download
            >
              Descargar CV
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSection
