import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavbarSection from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="app-shell">
      <NavbarSection />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
