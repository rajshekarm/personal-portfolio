import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Scale, Code2, Target } from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Identity + Approach + What I'm looking for */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              About
            </h2>

            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              I’m a <strong className="text-zinc-200">core .NET (C#) backend engineer</strong>{" "}
              who also builds <strong className="text-zinc-200">production AI workflows in Python</strong>.
              My sweet spot is the intersection of reliable system design and practical AI — shipping features
              that are measurable, debuggable, and maintainable.
            </p>

            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              I care about engineering fundamentals: clear interfaces, correctness under concurrency,
              predictable performance, and systems that are easy to operate in production.
            </p>
          </div>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition w-fit"
        >
          Read my full story →
        </Link>
          {/* How I work (non-repetitive, shows maturity) */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">
              How I work
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400 list-disc pl-5">
              <li>
                Start with the metric and constraints (latency, cost, correctness, deadlines) — then design.
              </li>
              <li>
                Prefer boring, reliable solutions first; introduce AI only when it improves the outcome.
              </li>
              <li>
                Build for production from day one: observability, failure modes, and safe delivery.
              </li>
            </ul>
          </div>

          {/* What I'm looking for */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-zinc-500" />
              <h3 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">
                What I’m looking for
              </h3>
            </div>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Backend / Platform roles in <strong className="text-zinc-200">.NET (C#)</strong> where I can own
              meaningful systems — and optionally build <strong className="text-zinc-200">Python AI workflows</strong>{" "}
              that create real product value.
            </p>
          </div>
        </motion.div>

        {/* Right: Principles (keep your differentiator cards) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <PrincipleCard
            icon={<Scale className="text-blue-500" />}
            title="Scalability"
            desc="Design for growth: async workflows, caching, and clean service boundaries."
          />
          <PrincipleCard
            icon={<ShieldCheck className="text-emerald-500" />}
            title="Reliability"
            desc="Predictable behavior: timeouts, retries, idempotency, and data integrity."
          />
          <PrincipleCard
            icon={<Zap className="text-purple-500" />}
            title="AI in Production"
            desc="Guardrails: evaluation, monitoring, fallbacks, and cost/latency budgets."
          />
          <PrincipleCard
            icon={<Code2 className="text-orange-500" />}
            title="Maintainability"
            desc="Clean architecture, testability, and interfaces teams can evolve."
          />
        </motion.div>
      </div>
    </section>
  );
};

function PrincipleCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
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
    <div
      onMouseMove={handleMouseMove}
      style={
        {
          ["--mx" as any]: "50%",
          ["--my" as any]: "50%",
        } as React.CSSProperties
      }
      className="relative p-6 rounded-2xl bg-zinc-900/40 border border-white/10 overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(59, 130, 246, 0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">
          {title}
        </h4>
        <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
