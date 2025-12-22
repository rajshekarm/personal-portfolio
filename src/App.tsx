
import './App.css'
import SplashScreen from "./components/SplashScreen";

import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'

import { useState } from 'react';
import PersonalChatbot from './components/PersonalChatbot';
import { SkillsMap } from './components/InteractiveSkillMap';
import { ProjectShowcase } from './components/Projects';
import { About } from './components/About';
import { Home } from './components/Home';
;

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
            <Home />
            <About />
            <SkillsMap />
            <ProjectShowcase />
            <div className="fixed bottom-6 right-6 z-50">
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
            </div>
          </>
        )}
      </div>
    </ThemeProvider>

  ) 
  }

export default App
