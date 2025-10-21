import { motion } from "framer-motion";
import { FaAws, FaHandshake } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { MdSpeed } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

export default function About() {
  return (
    <>
      {/* 🧑‍💻 About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 border-b border-[#1F2428]"
      >
        <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* 📸 Animated Profile Image */}
          <motion.div
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="/personal-portfolio/assets/Raj1.jpg"
              alt="Rajshekar"
              className="w-64 h-64 rounded-2xl object-cover border-4 border-[#D1D5DB] shadow-xl"
            />
          </motion.div>

          {/* 🧠 Animated Story Card */}
          <motion.div
            className="md:w-2/3 w-full text-center md:text-left bg-[#0F1115] border border-[#1F2428] rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#D1D5DB]">
              About Me
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed text-[#B0B8C1]">
              I'm an <span className="text-[#E5E7EB] font-medium">AI Developer</span> and{" "}
              <span className="text-[#E5E7EB] font-medium">Software Engineer</span> with a passion for building intelligent systems.
              My work spans designing scalable backend architectures, building robust software systems, and applying deep learning and LLMs to real-world applications.
            </p>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#B0B8C1]">
              I enjoy turning complex problems into clean, scalable solutions — whether that’s through building full-stack apps,
              developing generative AI features, or optimizing infrastructure for performance.
            </p>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#8A939C]">
              When I'm not coding, you'll find me exploring the latest in transformer models,
              creating content for my YouTube channel, or working on robotics and consumer-tech projects that excite me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⚙️ Key Strengths Section */}
      <section className="bg-black text-white px-6 py-20 border-b border-[#1F2428]">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6 text-[#D1D5DB]">Key Strengths</h2>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-3 text-[#B0B8C1]">
              <span className="text-[#D1D5DB] text-xl pt-1"><SiDotnet /></span>
              Strong C#/.NET Core development expertise with a focus on object-oriented programming, design patterns, and performance optimization.
            </li>

            <li className="flex items-start gap-3 text-[#B0B8C1]">
              <span className="text-[#D1D5DB] text-xl pt-1"><MdSpeed /></span>
              Proven success in building high-throughput, low-latency financial systems that meet strict regulatory and security requirements.
            </li>

            <li className="flex items-start gap-3 text-[#B0B8C1]">
              <span className="text-[#D1D5DB] text-xl pt-1"><FaAws /></span>
              Experienced in AWS cloud services, enabling scalable, fault-tolerant application deployments.
            </li>

            <li className="flex items-start gap-3 text-[#B0B8C1]">
              <span className="text-[#D1D5DB] text-xl pt-1"><GiBrain /></span>
              Solid foundation in algorithms, statistics, and data structures, applied to problem-solving in real-world financial and AI-driven systems.
            </li>

            <li className="flex items-start gap-3 text-[#B0B8C1]">
              <span className="text-[#D1D5DB] text-xl pt-1"><FaHandshake /></span>
              Effective collaborator in cross-functional teams, with strong communication skills and a continuous learning mindset.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
