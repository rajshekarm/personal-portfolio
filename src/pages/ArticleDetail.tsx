import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const a = articles.find((x) => x.slug === slug);

  if (!a) {
    return (
      <section className="bg-[#050505] text-white min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Not found</h1>
          <p className="text-zinc-400 mt-2">That article doesn’t exist.</p>
          <Link
            to="/blogs/articles"
            className="inline-block mt-6 text-sm px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900/40 transition"
          >
            ← Back to Articles
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
            <div className="text-xs font-mono tracking-widest text-blue-500 uppercase">
              {a.date}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter mt-3">{a.title}</h1>
            <p className="text-zinc-400 mt-4">{a.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/blogs/articles"
            className="text-sm px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900/40 transition"
          >
            ← Back
          </Link>
        </div>

        <article className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{a.body}</p>
        </article>
      </div>
    </section>
  );
}
