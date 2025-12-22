import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaCode, FaBrain, FaLayerGroup } from "react-icons/fa";
import Particles from "react-tsparticles";

export const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-[#050505] overflow-hidden text-white">
      <Particles /* Keep your existing particle settings here */ />

      <div className="z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: Mini Profile & Links (4 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/personal-portfolio/assets/profile2.jpeg"
              alt="Rajshekar"
              className="relative w-48 h-48 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-1">Based in Chicago, IL</h2>
            <p className="text-zinc-400 text-sm max-w-xs">
              Specializing in high-throughput backends and production-grade AI pipelines.
            </p>
          </div>

          <div className="flex gap-4 text-xl text-zinc-500">
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-white transition-colors"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* RIGHT: The "Architect" Hook & Pillars (8 Cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8 space-y-8"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Architecting Systems.<br /> Engineering Intelligence.
            </h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              I build scalable, distributed backends and integrate multimodal AI pipelines into production-ready full-stack applications.
            </p>
          </div>

          {/* THE THREE PILLARS (Replaces the text list) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Pillar 
              icon={<FaCode className="text-blue-500" />} 
              title="Backend" 
              desc="Distributed Systems, C#, Kafka, gRPC, Scalable Microservices." 
            />
            <Pillar 
              icon={<FaBrain className="text-purple-500" />} 
              title="Gen AI" 
              desc="RAG, LLM Orchestration, Multimodal Pipelines, Agentic AI." 
            />
            <Pillar 
              icon={<FaLayerGroup className="text-emerald-500" />} 
              title="Full Stack" 
              desc="React, Next.js, Real-time UIs, API Design & Security." 
            />
          </div>

          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
              View Architecture
            </a>
            <a href="/Rajashekar_Resume.pdf" className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-all text-zinc-300">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// Define the shape of your props
interface PillarProps {
  icon: React.ReactNode; // ReactNode allows any valid React element (icons, strings, etc.)
  title: string;
  desc: string;
}
const Pillar = ({ icon, title, desc }: PillarProps) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden group"
    >
      {/* Spotlight layer */}
      <div 
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2 text-blue-500">{icon}</div>
        <h3 className="font-bold text-sm uppercase tracking-wider text-white">{title}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mt-2">{desc}</p>
      </div>
    </div>
  );
};