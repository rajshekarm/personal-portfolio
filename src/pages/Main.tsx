import { Home } from "../components/Home";
import Navbar from "../components/Navbar";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { SkillsMap } from "../components/InteractiveSkillMap";
import { ProjectShowcase } from "../components/Projects";
import PersonalChatbot from "../components/PersonalChatbot";


export const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Experience/>
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
        </div>
    );
}   