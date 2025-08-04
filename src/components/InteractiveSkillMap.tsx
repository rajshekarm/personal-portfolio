import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = {
  ai: ["Deep Learning", "LLMs", "PyTorch", "Computer Vision", "Generative AI"],
  software: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
};

const bubbleVariants = {
  initial: { scale: 1 },
  expanded: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

export default function InteractiveSkillMap() {
  const [active, setActive] = useState<"ai" | "software" | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-purple-500 mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-12">
        {/* AI Engineer Bubble */}
        <motion.div
          className="w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer text-center font-semibold shadow-lg"
          variants={bubbleVariants}
          animate={active === "ai" ? "expanded" : "initial"}
          onClick={() => setActive(active === "ai" ? null : "ai")}
        >
          AI Engineer
        </motion.div>

        {/* Software Engineer Bubble */}
        <motion.div
          className="w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer text-center font-semibold shadow-lg"
          variants={bubbleVariants}
          animate={active === "software" ? "expanded" : "initial"}
          onClick={() => setActive(active === "software" ? null : "software")}
        >
          Software Engineer
        </motion.div>
      </div>

      {/* Exploding Skills */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {skills[active].map((skill) => (
              <motion.div
                key={skill}
                className="bg-zinc-800 text-white px-4 py-2 rounded-full border border-purple-400 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
