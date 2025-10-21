import { useState } from "react";
import { motion } from "framer-motion";

const skillMap = {
  ai: ["Deep Learning", "LLMs", "PyTorch", "Computer Vision", "Generative AI", "TensorFlow"],
  software: ["React", "Node.js", "PostgreSQL", "Docker", "Kafka", "TypeScript"],
};

const orbitRadius = 120;

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI;
  const x = orbitRadius * Math.cos(angle);
  const y = orbitRadius * Math.sin(angle);
  return { x, y };
}

export default function Skills() {
  const [active, setActive] = useState<"ai" | "software" | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-purple-500 mb-16">Skills</h2>

      <div className="relative flex flex-wrap justify-center gap-16">
        {(["ai", "software"] as const).map((type) => (
          <div key={type} className="relative w-40 h-40">
            {/* Main Bubble */}
            <motion.div
              onClick={() => setActive(active === type ? null : type)}
              className="w-40 h-40 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer shadow-lg text-center font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {type === "ai" ? "AI Engineer" : "Software Engineer"}
            </motion.div>

            {/* Orbiting Subskills */}
            {active === type &&
              skillMap[type].map((skill, index) => {
                const { x, y } = getOrbitPosition(index, skillMap[type].length);
                return (
                  <motion.div
                    key={skill}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-zinc-800 border border-purple-400 text-white px-4 py-2 rounded-full text-sm shadow-sm whitespace-nowrap">
                      {skill}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
}
