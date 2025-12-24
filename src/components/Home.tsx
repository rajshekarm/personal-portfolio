import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaCode,
  FaBrain,
  FaLayerGroup,
} from "react-icons/fa";
import Particles from "react-tsparticles";

export const Home = () => {
  // TODO: Replace these with your real URLs
  const socials = {
    linkedin: "https://www.linkedin.com/in/rajshekarmudigonda/",
    github: "https://github.com/rajshekarm",
    email: "mailto:rashekarmudigonda@gmail.com",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-[#050505] overflow-hidden text-white"
    >
      <Particles /* Keep your existing particle settings here */ />

      <div className="z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Mini Profile & Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <img
              src="/personal-portfolio/assets/profile2.jpeg"
              alt="Rajshekar headshot"
              className="relative w-48 h-48 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              loading="eager"
            />
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-lg leading-tight">
            Rajashekar (RJ)
          </h3>
          {/* Role */}
  <p className="text-zinc-300 text-sm">
    Backend / Full Stack GenAI Engineer
  </p>
            <h2 className="mt-3 text-blue-400 font-mono text-sm tracking-widest uppercase mb-1">
    Chicago, IL
  </h2>
            <p className="text-zinc-400 text-sm max-w-xs">
  Mid-level software engineer focused on performance, reliability, and delivery.
  <br />
  Experience across backend systems, distributed architecture, and full-stack developement.
</p>
          </div>

          <div className="flex gap-4 text-xl text-zinc-500">
            <a
              href={socials.linkedin}
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={socials.github}
              aria-label="GitHub"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="hover:text-white transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Hero + Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Backend Engineering in .NET. 
              <br />
              High-performance React UI components.
              <br /> 
              GenAI workflows in Python.
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              5+ years delivering .NET APIs and backend systems, modernizing legacy apps, and supporting product UI migrations to modern JavaScript frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Pillar
              icon={<FaCode className="text-blue-500" />}
              title="Backend"
              desc="C#/.NET backend engineering: clean APIs, gRPC/REST APIs, microservices, async workflows, SQL, Database tuninng, caching, and performance tuning built for reliability and scale."
            />
            <Pillar
              icon={<FaBrain className="text-purple-500" />}
              title="GenAI Systems"
              desc="LLM integration (OpenAI, Gemini), multimodal pipelines, RAG services, tool calling, orchestration, and evaluation, built with reliability, monitoring, and scalability."
            />
            <Pillar
              icon={<FaLayerGroup className="text-emerald-500" />}
              title="Full Stack"
              desc="React, Angular apps, real-time UX, pragmatic API design, and security fundamentals."
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
            >
              View Engineering work
            </a>
            <a
              href="/Rajashekar_Resume.pdf"
              className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-all text-zinc-300"
            >
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Pillar = ({ icon, title, desc }: PillarProps) => {
  const rafRef = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Avoid spamming style writes (smoother + no React re-renders).
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={
        {
          // Defaults so the gradient has a stable initial position.
          ["--mx" as any]: "50%",
          ["--my" as any]: "50%",
        } as React.CSSProperties
      }
      className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden group"
    >
      {/* Spotlight layer */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(59, 130, 246, 0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">{icon}</div>
        <h3 className="font-bold text-sm uppercase tracking-wider text-white">
          {title}
        </h3>
        <p className="text-zinc-400 text-xs leading-relaxed mt-2">{desc}</p>
      </div>
    </div>
  );
};
