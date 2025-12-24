import { Link } from "react-router-dom";

export default function BlogsHome() {
  return (
    <section className="bg-[#050505] text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tighter">Blogs</h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          Case studies (systems + architecture) and articles (notes, opinions, learnings).
        </p>
<br/>
        <h1>I am currently developing  the backend to store this blogs </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link
            to="/blogs/case-studies"
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition"
          >
            <div className="text-xs font-mono tracking-widest text-blue-500 uppercase">
              Deep Dives
            </div>
            <div className="text-2xl font-bold mt-2">Case Studies</div>
            <p className="text-zinc-400 mt-3">
              Systems I’ve built, tradeoffs I made, and what shipped to production.
            </p>
          </Link>

          <Link
            to="/blogs/articles"
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition"
          >
            <div className="text-xs font-mono tracking-widest text-blue-500 uppercase">
              Writing
            </div>
            <div className="text-2xl font-bold mt-2">Articles</div>
            <p className="text-zinc-400 mt-3">
              Notes on engineering, AI, performance, and building product.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
