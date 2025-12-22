import { motion } from "framer-motion";
import { ShieldCheck, Zap, Scale, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: The Professional Story */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-tighter italic border-l-4 border-blue-600 pl-4">
            The Mission
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            I am a **Senior Backend Engineer** and **AI Architect** based in Chicago, specializing in the intersection of high-scale infrastructure and machine intelligence. My career has been defined by a focus on precision—whether analyzing the structural mechanics of beams or architecting distributed trading systems.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            At **SS&C Eze**, I engineered distributed microservices that handled critical trading workflows with low latency. Today, at **Fashion AI**, I am building the backend infrastructure that powers multimodal AI pipelines, integrating LLMs and Diffusion models into production systems.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Currently, I am the founding force behind **Kshanax AI**, where I apply **Clean Architecture** to build next-generation investment management technology. I hold an M.S. in Computer Science (AI focus) from the **Illinois Institute of Technology**.
          </p>
        </motion.div>

        {/* Right: Engineering Principles (Senior Differentiator) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PrincipleCard 
            icon={<Scale className="text-blue-500" />} 
            title="Scalability" 
            desc="Designing systems that grow gracefully under high concurrency and data volume." 
          />
          <PrincipleCard 
            icon={<ShieldCheck className="text-emerald-500" />} 
            title="Reliability" 
            desc="Prioritizing data integrity and system uptime through Clean Architecture." 
          />
          <PrincipleCard 
            icon={<Zap className="text-purple-500" />} 
            title="AI Integration" 
            desc="Moving AI from research to production with optimized multimodal pipelines." 
          />
          <PrincipleCard 
            icon={<Code2 className="text-orange-500" />} 
            title="Maintainability" 
            desc="Writing decoupled, testable code that teams can scale and evolve." 
          />
        </div>
      </div>
    </section>
  );
};
interface PillarProps {
  icon: React.ReactNode; // ReactNode allows any valid React element (icons, strings, etc.)
  title: string;
  desc: string;
}
function PrincipleCard({ icon, title, desc }: PillarProps) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all">
      <div className="mb-4">{icon}</div>
      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{title}</h4>
      <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}