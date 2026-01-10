import React from 'react'
import Navbar from './layout/Navbar.jsx'
import Hero from './assets/sections/Hero.jsx'
import About from './assets/sections/About.jsx'
import Contact from './assets/sections/Contact.jsx'

function App() {
  return <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Contact />
      

    </main>
  </div>
}

export default App
