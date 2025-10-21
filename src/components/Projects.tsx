import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Flatmates – AI Chore Scheduler",
    description:
      "A smart chore management app using AI for optimized task assignment, rotation logic, and group-based alerts. Includes scheduled and on-demand flows.",
    stack: ["React", "TypeScript", "Express", "MongoDB", "AI Models"],
    github: "https://github.com/your-username/flatmates",
    demo: "https://flatmates-demo.com",
  },
  {
    title: "Pushup Detection App",
    description:
      "A real-time fitness app using MediaPipe and TensorFlow.js to detect pushups and store user stats with Supabase.",
    stack: ["Next.js", "TailwindCSS", "MediaPipe", "Supabase"],
    github: "https://github.com/rajshekarm/pushup-detection",
    demo: "",
  },
  {
    title: "LLM-Enabled Portfolio Chatbot",
    description:
      "An interactive chatbot built using OpenAI's API that answers questions about my portfolio, projects, and resume contextually.",
    stack: ["React", "OpenAI API", "LangChain", "Vercel"],
    github:
      "https://github.com/rajshekarm/personal-portfolio/blob/main/src/components/PersonalChatbot.tsx",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-[#5DA9E9]">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0F1115] border border-[#1F2428] rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-[0_0_25px_#5DA9E940] transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#5DA9E9] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#B0B8C1] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#1E2328] text-[#B0B8C1] px-3 py-1 rounded-full text-sm border border-[#2B3238]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#B0B8C1] hover:text-[#5DA9E9] transition-colors"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#B0B8C1] hover:text-[#5DA9E9] transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
