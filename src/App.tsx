
import './App.css'
import SplashScreen from "./components/SplashScreen";

import Navbar from './components/Navbar'

import Hero from './components/Hero'
import { ThemeProvider } from './components/ThemeProvider'

import About from './components/About'
import Skills from './components/SkillsOld'
import Projects from './components/Projects'
// import InteractiveSkillMap from './components/InteractiveSkillMap'
import OrbitalSkills from './components/Skills'
import { useState } from 'react';
import AIAkills from './components/AISkills';
import PersonalChatbot from './components/PersonalChatbot';

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
            {/* <About /> */}
            {/* <OrbitalSkills /> */}

            {/* <InteractiveSkillMap /> */}
            <Skills />
            {/* <AIAkills /> */} 
            <Projects />
            <PersonalChatbot
                  name="Rajashekar"
                  storageKey={`recruiter-chatbot-${'rajashekar'}`}
                  role="AI / Software Engineer"
                  resumeUrl="/Rajashekar_Resume.pdf"
                  links={{ github: "...", linkedin: "...", email: "mailto:..." }}
                  projects={[{ title: "Flatmates (Chores AI)" }, { title: "EMS Trading Systems" }]}
                  skills={["React","TypeScript","Kafka","AI/ML","Spring"]}
                  education={["M.S. CS (AI), Illinois Tech, 2025"]}
                />
          </>
        )}
      </div>
    </ThemeProvider>

  ) 
  }

export default App
