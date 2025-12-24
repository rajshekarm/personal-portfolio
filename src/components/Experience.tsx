import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";

type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  impact: string[];
  built: string[];
  tech: string[];
  featuredLinks?: { label: string; href: string }[];
};

const experience: ExperienceItem[] = [
  {
    company: "Faishion AI (Virtual Try-On Platform)",
    title: "Backend Developer | Python for AI | Full Stack with React & FastAPI",
    dates: "2025 — Present",
    location: "Chicago, IL (Hybrid/Remote)",
    summary:
      "Built production backend services and AI pipelines enabling virtual try-ons using multimodal understanding + image generation.",
    impact: [
      "Shipped a multimodal workflow that understands user + product images and generates virtual try-on outputs.",
      "Improved pipeline reliability with async processing, retries/timeouts, and observability signals for failures + latency.",
      "Designed API boundaries and orchestration so image-heavy workloads remained scalable and debuggable.",
    ],
    built: [
      ".NET APIs for upload/orchestration, validation, and integration with AI services.",
      "Python pipeline integrating Gemini (image understanding) + image generation models for try-on outputs.",
      "Monitoring hooks (logs/metrics) to track throughput, error modes, and end-to-end latency.",
    ],
    tech: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "SQL",
      "Redis",
      "Docker",
      "Python",
      "Gemini / LLM APIs",
      "Image Generation",
      "Observability",
    ],
    featuredLinks: [
      { label: "Skills Map", href: "#skills" },
    ],
  },
  {
    company: "Kshanax (Investment Management Product)",
    title: "Software Engineer (.NET for backend Orchestration and Services) | AI Feature Development (Python)",
    dates: "2023 — 2024",
    location: "Chicago, IL",
    summary:
      "Integrated AI-driven workflows into an investment management product to improve research and decision flow.",
    impact: [
      "Embedded AI features into core product workflows (analysis/assistive automation) with production constraints in mind.",
      "Improved usability by reducing manual steps and standardizing outputs for repeated investment operations.",
      "Added guardrails and evaluation thinking so AI quality stays predictable over time (not a one-off demo).",
    ],
    built: [
      "Domain-driven .NET services and APIs supporting investment workflows and secure integrations.",
      "Python AI services for workflow automation and intelligent assistance (LLM/RAG).",
      "Clean interfaces between product backend and AI components to keep behavior testable and maintainable.",
    ],
    tech: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "SQL Server / Postgres",
      "REST",
      "Docker",
      "CI/CD",
      "Python",
      "LLM APIs",
    ],
    featuredLinks: [{ label: "View Engineering Work", href: "#projects" }],
  },

//   Optional: add your EMS / trading systems role if you have one
  {
    company: "SS&C Eze (EMS / Trading Systems)",
    title: "Backend Engineer (.NET)",
    dates: "2018  — 2023",
    location: "Hyderabad, India",
    summary: "Low-latency backend services supporting execution / order flow and reliability under load.",
    impact: [
      "Built and optimized performance-sensitive APIs and workflows with concurrency and correctness in mind.",
      "Improved observability and incident response with better logging/metrics and operational tooling.",
    ],
    built: [
      "Async workflows, caching, and service-to-service integration patterns.",
      "Resiliency: retries, idempotency, timeouts, and rate limiting where appropriate.",
    ],
    tech: ["C#", ".NET", "ASP.NET", "SQL", "Redis", "Messaging", "Observability"],
    featuredLinks: [],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Experience
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            Where I’ve worked, what I owned, and the impact I shipped — with a
            strong focus on .NET backend engineering and production AI workflows
            in Python.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <ExperienceCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/Rajashekar_Resume.pdf"
            className="px-6 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-all text-zinc-300"
          >
            Download Resume (PDF)
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            View Engineering Work
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const rafRef = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
      className="relative md:pl-10"
    >
      {/* timeline dot */}
      <div className="hidden md:block absolute left-[5px] top-7 w-4 h-4 rounded-full bg-blue-500/80 shadow-[0_0_0_6px_rgba(255,255,255,0.04)]" />

      <div
        onMouseMove={handleMouseMove}
        style={
          {
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
              "radial-gradient(520px circle at var(--mx) var(--my), rgba(59, 130, 246, 0.12), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-zinc-200 font-semibold">
                <FaBuilding className="text-zinc-500" />
                <span>{item.company}</span>
              </div>
              <h3 className="mt-2 text-white font-bold tracking-tight">
                {item.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt className="text-zinc-500" /> {item.dates}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt className="text-zinc-500" /> {item.location}
                </span>
              </div>
            </div>

            {item.featuredLinks?.length ? (
              <div className="flex flex-wrap gap-2">
                {item.featuredLinks.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    className="text-xs px-3 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition inline-flex items-center gap-2"
                  >
                    {l.label} <FaArrowRight className="opacity-70" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* Summary */}
          <p className="mt-4 text-zinc-400 text-sm max-w-3xl">
            {item.summary}
          </p>

          {/* Two columns: Impact + Built */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3">
                Impact
              </div>
              <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
                {item.impact.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3">
                What I Built
              </div>
              <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
                {item.built.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400">
              <FaTools className="text-zinc-500" /> Tech:
            </span>
            {item.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/60 border border-white/10 text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
