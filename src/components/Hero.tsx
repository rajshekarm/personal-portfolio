import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-start md:items-center px-8 pt-24 bg-black overflow-hidden text-white"
    >
      {/* 🔮 Particle Background */}
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#D1D5DB" }, // subtle gray particles
            links: {
              color: "#D1D5DB",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* 🧩 Left: Profile Card */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0 z-10">
        <img
          src="/personal-portfolio/assets/profile2.jpeg"
          alt="Rajshekar"
          className="w-56 h-56 rounded-full object-cover border-4 border-[#D1D5DB] shadow-lg mb-4"
        />

        <h2 className="text-xl font-semibold text-[#D1D5DB]">
          Software Engineer & AI Developer
        </h2>

        <p className="text-[#B0B8C1] text-sm mb-4 max-w-xs">
          Passionate about building intelligent systems that combine scalable backend design with
          cutting-edge AI and ML capabilities.
        </p>

        <div className="space-y-2 text-[#C5CBD3] text-sm">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#D1D5DB]" /> Chicago, IL, USA
          </p>
          <p className="flex items-center gap-2">
            <FaUniversity className="text-[#D1D5DB]" /> Illinois Institute of Technology
          </p>
          <a
            href="mailto:rmudigonda@hawk.illinoistech.edu"
            className="flex items-center gap-2 hover:text-[#E5E7EB] transition-colors"
          >
            <FaEnvelope className="text-[#D1D5DB]" /> rmudigonda@hawk.illinoistech.edu
          </a>
          <a
            href="https://github.com/rajshekar-m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#E5E7EB] transition-colors"
          >
            <FaGithub className="text-[#D1D5DB]" /> github.com/rajshekar-m
          </a>
        </div>
      </div>

      {/* 💬 Right: Intro + Skills */}
      <div className="md:w-2/3 text-center md:text-left z-10 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[#EAEAEA]">
          Hi, I’m <span className="text-[#D1D5DB]">Rajshekar</span>
        </h1>

        <p className="text-[#B0B8C1] text-lg max-w-2xl">
          I’m a <span className="text-[#D1D5DB] font-semibold">Software Engineer</span> and{" "}
          <span className="text-[#D1D5DB] font-semibold">AI Developer</span> focused on building
          intelligent, scalable, and high-performance systems.
        </p>

        <a
          href="#projects"
          className="inline-block mt-3 px-8 py-3 bg-[#D1D5DB] hover:bg-[#E5E7EB] rounded-full text-black font-semibold shadow-md transition-all duration-300"
        >
          Explore My Work
        </a>

        {/* 💻 Technical Expertise */}
        <div className="mt-10 border-t border-[#1F2428] pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D1D5DB] flex items-center gap-2">
            💻 Technical Expertise
          </h2>

          <div className="space-y-3 text-[#B0B8C1] text-sm sm:text-base leading-relaxed">
            <p>
              <span className="font-semibold text-[#D1D5DB]">Programming:</span> C#, Python, SQL, C,
              C++, Java, CUDA, R, PL/SQL, Git, Bash, JavaScript, HTML/CSS
            </p>

            <p>
              <span className="font-semibold text-[#D1D5DB]">Frameworks & Libraries:</span>{" "}
              PyTorch, TensorFlow, Crew AI, LangChain, Hugging Face, Scikit-learn, NumPy, Pandas,
              ONNX
            </p>

            <p>
              <span className="font-semibold text-[#D1D5DB]">Generative AI:</span> Agentic AI, RAG,
              LLM Fine-tuning, Model Profiling, Ollama, OpenAI, Distributed Training
            </p>

            <p>
              <span className="font-semibold text-[#D1D5DB]">Databases:</span> Big Data (Spark,
              Hadoop), RDBMS (MySQL, PostgreSQL), NoSQL (MongoDB), Vector (ChromaDB, Pinecone)
            </p>

            <p>
              <span className="font-semibold text-[#D1D5DB]">Cloud & Web:</span> AWS, Azure, GCP,
              Kubernetes, Docker, DevOps, CI/CD, MLflow, Streamlit, React, FastAPI
            </p>
          </div>

          <p className="text-[#8A939C] mt-4 max-w-2xl">
            Experienced in deploying ML models, optimizing AI pipelines, and designing{" "}
            <span className="text-[#EAEAEA] font-medium">secure, scalable architectures</span> for
            real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
}
