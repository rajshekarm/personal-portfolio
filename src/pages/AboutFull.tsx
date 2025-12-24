import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutFull = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            About Me
          </h1>

          <Link
            to="/#home"
            className="text-sm px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
          >
            ← Back
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-5 text-zinc-300 leading-relaxed"
        >
          {/* Paste your FULL story here (the long version we wrote). */}
          <p>
            I’m RJ — and the easiest way to understand me is this: I’ve always been
            the kind of person who becomes dangerous with time...
          </p>

          {/* Continue with your full narrative as <p> blocks */}
        </motion.div>
      </div>
    </section>
  );
};
