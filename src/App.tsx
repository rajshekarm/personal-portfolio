
import './App.css'
import SplashScreen from "./components/SplashScreen";

import Navbar from './components/Navbar'

import Hero from './components/Hero'
import { ThemeProvider } from './components/ThemeProvider'

import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import InteractiveSkillMap from './components/InteractiveSkillMap'
import OrbitalSkills from './components/ObitalSkills'
import { useState } from 'react';

function App() {
   
  const [showSplash, setShowSplash] = useState(true);

  return (

    <ThemeProvider>
      <div className="bg-black text-white scroll-smooth min-h-screen">
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <>
            <Navbar />
            <Hero />
            <About />
            <OrbitalSkills />

            {/* <InteractiveSkillMap /> */}
            <Skills />
            <Projects />
          </>
        )}
      </div>
    </ThemeProvider>

  ) 
  }

export default App
