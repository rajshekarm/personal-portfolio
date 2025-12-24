import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyList() {
  return (
    <section className="bg-[#050505] text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Case Studies</h1>
            <p className="text-zinc-400 mt-2">Architecture, constraints, tradeoffs, outcomes.</p>
          </div>
          <Link
            to="/blogs"
            className="text-sm px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900/40 transition"
          >
            ← Back to Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              to={`/blogs/case-studies/${cs.slug}`}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-7 hover:border-zinc-700 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">
                  {cs.company}
                </span>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300">
                  {cs.type}
                </span>
              </div>
              <h2 className="text-2xl font-bold mt-3">{cs.title}</h2>
              <p className="text-zinc-400 mt-3">{cs.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cs.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
