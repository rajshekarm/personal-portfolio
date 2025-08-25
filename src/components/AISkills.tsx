import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger
      delayChildren: 0.1,    // Optional delay before first child animates
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // Custom ease
    },
  },
};
export default function AIAkills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-500">Artificial Engineering Skills</h2>
        <h3>Machine Learning Engineering is 10% machine learning and 90% engineering</h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "AI & ML",
              items: [
                "Deep Learning (CNNs, RNNs)",
                "Transformers & LLMs",
                "PyTorch, TensorFlow",
                "Computer Vision",
                "Generative AI",
              ],
            },
            {
              title: "Tools & DevOps",
              items: ["Git", "Docker", "VS Code", "Postman"],
            },
            {
              title: "Other Skills",
              items: [
                "Content Creation",
                "YouTube SEO",
                "Research Writing",
                "Team Collaboration",
              ],
            },
          ].map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-xl border border-zinc-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {group.title}
              </h3>
              <ul className="space-y-2 list-disc list-inside text-white text-left">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
