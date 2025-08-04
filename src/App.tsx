import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleTest from './components/ParticleTest';
import { ThemeProvider } from './components/ThemeProvider'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import InteractiveSkillMap from './components/InteractiveSkillMap'
import OrbitalSkills from './components/ObitalSkills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
        <div className="bg-black text-white scroll-smooth">
          <Navbar />
          <Hero />
          <About />
          <OrbitalSkills />
          <InteractiveSkillMap />
          <Skills />
          <Projects />cd

        </div>
    </ThemeProvider>
   
  ) 
  }

export default App
