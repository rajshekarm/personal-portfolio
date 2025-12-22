import { motion } from "framer-motion";
import { Server, Brain, Layout, Zap, Database, Globe } from "lucide-react";

export const  SkillsMap = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Zap className="text-yellow-500" /> Technical Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          
          {/* 1. PRIMARY: Backend & Distributed Systems (Large Card) */}
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all group">
            <Server className="text-blue-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-3">Backend Architecture</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Specializing in high-throughput microservices, CQRS patterns, and scalable systems using C# and .NET.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C# / .NET", "CQRS", "gRPC", "Kafka", "SQL Server", "EF Core", "Distributed Systems"].map((s) => (
                <span key={s} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono rounded-full uppercase tracking-wider">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 2. SECONDARY: AI & Machine Learning Innovation */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-purple-500" size={32} />
              <h3 className="text-xl font-bold text-white">AI Engineering</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Building multimodal pipelines and fine-tuning LLMs for production-grade intelligence.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">RAG</span>
              <span className="text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">Gemini/Nano</span>
              <span className="text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">Diffusion Models</span>
              <span className="text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">CLIP</span>
              <span className="text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">U-Net</span>
            </div>
          </div>

          {/* 3. Full-Stack / Interface Engineering */}
          <div className="md:col-span-1 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all">
            <Layout className="text-emerald-500 mb-4" size={24} />
            <h4 className="font-bold text-white mb-2">Full-Stack</h4>
            <p className="text-zinc-500 text-xs">React & TypeScript for high-performance dashboards and NLP trading blotters.</p>
          </div>

          {/* 4. Infrastructure & Cloud Mastery */}
          <div className="md:col-span-1 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-orange-500/50 transition-all">
            <Database className="text-orange-500 mb-4" size={24} />
            <h4 className="font-bold text-white mb-2">Infrastructure</h4>
            <p className="text-zinc-500 text-xs">Architecting with Docker, Kubernetes, and Azure for 99.9% availability.</p>
          </div>

        </div>
      </div>
    </section>
  );
};