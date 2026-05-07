import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="py-4 border-top border-secondary-subtle mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0 text-secondary">Copyright © 2026 Edison Trejos</p>
        <div className="d-flex gap-3">
          <a
            href="https://linkedin.com/in/edison-trejos-dev"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-light d-flex align-items-center gap-2"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/Etrejos97"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-light d-flex align-items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
