import React from 'react'
import Navbar from './layout/Navbar.jsx'
import Hero from './assets/sections/Hero.jsx'
import About from './assets/sections/About.jsx'
import Projects from './assets/sections/Projects.jsx'
import Contact from './assets/sections/Contact.jsx'
import Footer  from './layout/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App;
