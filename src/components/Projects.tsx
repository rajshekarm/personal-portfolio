import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Server, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectType = "Professional" | "Personal" | "OSS" | "Contract";

type Project = {
  slug: string; // ✅ added
  title: string;
  company: string;
  type: ProjectType;
  desc: string;
  tech: string[];
  architecture: string;
  link: string;
};

const projects: Project[] = [
  {
    slug: "distributed-trading-infrastructure", // ✅ added
    title: "Distributed Trading Infrastructure",
    company: "SS&C Eze",
    type: "Professional",
    desc: "Redesigned critical trading workflows by implementing a distributed microservices architecture. Optimized data consistency across high-concurrency systems.",
    tech: ["C#", ".NET Core", "gRPC", "Kafka", "SQL Server"],
    architecture: "Event-Driven Microservices with CQRS for low-latency trade execution.",
    link: "https://www.ezesoft.com/solutions/eze-eclipse-overview",
  },
  {
    slug: "multimodal-ai-platform", // ✅ added
    title: "Multimodal AI Platform",
    company: "Fashion AI",
    type: "Professional",
    desc: "Built backend infrastructure for an AI-driven platform, integrating LLMs and Diffusion-based multimodal pipelines into production systems.",
    tech: ["Python", "PyTorch", "CLIP", "Diffusion", "FastAPI"],
    architecture: "Asynchronous GPU task queue for real-time generative image processing.",
    link: "https://www.faishion.ai/",
  },
  {
    slug: "kshanax-investment-tech", // ✅ added
    title: "Kshanax AI - Investment Tech",
    company: "Founding Engineer",
    type: "Personal",
    desc: "Architecting a high-performance investment management platform using Clean Architecture to bridge complex financial data with AI insights.",
    tech: ["React", ".NET", "PostgreSQL", "OpenAI API"],
    architecture: "Domain-Driven Design (DDD) with a focus on data integrity and modularity.",
    link: "https://kshana-x-ui.vercel.app/",
  },
];

const FILTERS: Array<"All" | ProjectType> = ["All", "Professional", "Personal", "OSS", "Contract"];

function TypeBadge({ type }: { type: ProjectType }) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-mono tracking-wide";

  const map: Record<ProjectType, string> = {
    Professional: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    Personal: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    OSS: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    Contract: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  };

  return <span className={`${base} ${map[type]}`}>{type}</span>;
}

export const ProjectShowcase = () => {
  const [filter, setFilter] = useState<"All" | ProjectType>("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section id="projects" className="bg-[#050505] text-white py-20">
      <div className="px-6 mb-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter">Architectural Showcase</h2>
            <p className="text-zinc-500 mt-2 italic">Shift + Scroll to explore systems</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={[
                  "px-4 py-2 rounded-full border text-xs font-mono transition",
                  filter === f
                    ? "border-zinc-600 bg-zinc-800 text-white"
                    : "border-zinc-800 bg-transparent text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200",
                ].join(" ")}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 px-6 pb-10">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={`${project.slug}-${index}`} // ✅ better key
            className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">
                        {project.company}
                      </span>
                      <TypeBadge type={project.type} />
                    </div>

                    <h3 className="text-3xl font-bold mt-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-white/10"
                    aria-label={`Open ${project.title}`}
                    title="Open external link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-zinc-400 mb-8 leading-relaxed">{project.desc}</p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-8">
                  <div className="flex items-center gap-2 text-zinc-300 text-sm font-bold mb-2">
                    <Server size={16} className="text-blue-500" /> System Architecture
                  </div>
                  <p className="text-zinc-500 text-xs italic">{project.architecture}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blogs`}
                  className="flex items-center gap-2 text-sm font-bold text-white group/btn"
                >
                  Case Study
                  <ChevronRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
