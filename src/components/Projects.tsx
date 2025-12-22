import { motion } from "framer-motion";
import { ChevronRight, Server, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Distributed Trading Infrastructure",
    company: "SS&C Eze",
    desc: "Redesigned critical trading workflows by implementing a distributed microservices architecture. Optimized data consistency across high-concurrency systems.",
    tech: ["C#", ".NET Core", "gRPC", "Kafka", "SQL Server"],
    architecture: "Event-Driven Microservices with CQRS for low-latency trade execution.",
    link: "#"
  },
  {
    title: "Multimodal AI Platform",
    company: "Fashion AI",
    desc: "Built backend infrastructure for an AI-driven platform, integrating LLMs and Diffusion-based multimodal pipelines into production systems.",
    tech: ["Python", "PyTorch", "CLIP", "Diffusion", "FastAPI"],
    architecture: "Asynchronous GPU task queue for real-time generative image processing.",
    link: "#"
  },
  {
    title: "Kshanax AI - Investment Tech",
    company: "Founding Engineer",
    desc: "Architecting a high-performance investment management platform using Clean Architecture to bridge complex financial data with AI insights.",
    tech: ["React", ".NET", "PostgreSQL", "OpenAI API"],
    architecture: "Domain-Driven Design (DDD) with a focus on data integrity and modularity.",
    link: "#"
  }
];

export const ProjectShowcase = () => {
  return (
    <section id="projects" className="bg-[#050505] text-white py-20">
      <div className="px-6 mb-12">
        <h2 className="text-4xl font-bold tracking-tighter">Architectural Showcase</h2>
        <p className="text-zinc-500 mt-2 italic">Shift + Scroll to explore systems</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 px-6 pb-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">{project.company}</span>
                    <h3 className="text-3xl font-bold mt-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  </div>
                  <a href={project.link} className="p-3 bg-white/5 rounded-full hover:bg-white/10">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>

                {/* System Design Highlight */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-8">
                  <div className="flex items-center gap-2 text-zinc-300 text-sm font-bold mb-2">
                    <Server size={16} className="text-blue-500" /> System Architecture
                  </div>
                  <p className="text-zinc-500 text-xs italic">
                    {project.architecture}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-white group/btn">
                  Case Study <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};