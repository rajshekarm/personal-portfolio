import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((x) => x.slug === slug);

  if (!cs) {
    return (
      <section className="bg-[#050505] text-white min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Not found</h1>
          <p className="text-zinc-400 mt-2">That case study doesn’t exist.</p>
          <Link
            to="/blogs/case-studies"
            className="inline-block mt-6 text-sm px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900/40 transition"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#050505] text-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">
                {cs.company}
              </span>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300">
                {cs.type}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter mt-3">{cs.title}</h1>
            <p className="text-zinc-400 mt-4">{cs.summary}</p>
          </div>

          <Link
            to="/blogs/case-studies"
            className="text-sm px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900/40 transition"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="text-sm font-bold text-zinc-200">System Architecture</div>
          <p className="text-zinc-400 mt-2 italic">{cs.architecture}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cs.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>

          {cs.externalLink && (
            <a
              href={cs.externalLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 text-sm font-mono text-blue-400 hover:text-blue-300"
            >
              External link →
            </a>
          )}
        </div>

        <div className="mt-10 space-y-8">
          {cs.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="text-xl font-bold">{s.heading}</h2>
              <p className="text-zinc-400 mt-3 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
