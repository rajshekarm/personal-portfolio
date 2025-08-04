import Particles from "react-tsparticles";

export default function Hero() {
  return (
    
<section
    id="home"
    className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 sm:pt-24 bg-black overflow-hidden"
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
            color: { value: "#A855F7" },
            links: {
              color: "#A855F7",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      {/* 📸 Hero Image */}
      <div className="mt-10 md:mt-0 md:w-1/3 z-10">
        <img
          src="/assets/profile.jpeg"
          alt="A R"
          className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 mx-auto shadow-lg"
        />
      </div>
      {/* 🔤 Hero Content */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
        Hi, I’m <span className="text-purple-500">Rajshekar</span>
      </h1>

      <p className="text-xl sm:text-2xl max-w-2xl text-gray-300 mb-8">
        AI Developer & Creative Software Engineer building intelligent systems with deep learning, LLMs, and elegant backend architecture.
      </p>

      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Explore My Work
      </a>
    </section>
    
  );
}
