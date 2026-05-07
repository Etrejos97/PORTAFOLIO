import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from 'react'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Enviando mensaje...')
    try {
      const formData = new FormData(formRef.current)
      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('¡Mensaje enviado con éxito!')
      formRef.current.reset()
    } catch {
      setStatus('No fue posible enviar el mensaje. Intenta de nuevo.')
    }
  }
  
  return (
    <section id="contact" className="section-spacing" data-aos="fade-up">
      <div className="container">
        <div className="card-dark p-4 p-md-5">
          <h2 className="mb-4">Contacto</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input id="name" name="name" type="text"
                className="form-control bg-dark text-light border-secondary" required />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input id="email" name="email" type="email"
                className="form-control bg-dark text-light border-secondary" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea id="message" name="message" rows="5"
                className="form-control bg-dark text-light border-secondary" required />
            </div>
            <div className="col-12 d-flex align-items-center gap-3">
              <button type="submit" className="btn btn-primary">Enviar mensaje</button>
              {status && <small className="text-secondary">{status}</small>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
