import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { container, item } from "../lib/motion";

export default function Index() {
  return (
    <motion.div
      variants={container}
      initial={false}
      animate="show"
      className="max-w-5xl mx-auto pt-10 sm:pt-20 flex flex-col items-center text-center"
    >
      {/* Availability Pill */}
      <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 flex-wrap sm:flex-nowrap justify-center rounded-full glass mb-8 sm:mb-12 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_theme(colors.emerald.400)]" />
        <span className="text-xs font-mono text-(--muted) tracking-widest uppercase">Available for opportunities</span>
      </motion.div>

      {/* Hero Header */}
      <motion.h1
        variants={item}
        className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight mb-8 drop-shadow-sm"
      >
        Hi, I'm <span className="text-gradient glow-text font-bold">Zubayr</span>
      </motion.h1>

      {/* Hero Description */}
      <motion.p
        variants={item}
        className="text-lg md:text-xl text-(--muted) max-w-2xl mx-auto leading-relaxed mb-12 px-4 shadow-black/50"
      >
        I engineer stunning, high-performance web applications. Blending cutting-edge technologies like
        <span className="text-white font-medium mx-1 drop-shadow">React, Next.js</span> and
        <span className="text-white font-medium mx-1 drop-shadow">Tailwind CSS</span>
        to build premium digital experiences.
      </motion.p>

      {/* Call to Actions */}
      <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <Link
          to="/work"
          className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-(--accent-glow)"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors"
        >
          Let's Talk
        </Link>
      </motion.div>

      {/* Stats/Metrics Bento Box */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-24 sm:mt-32">
        {[
          { label: "Experience", value: "3+ Years" },
          { label: "Projects", value: "20+ Built" },
          { label: "Clients", value: "Worldwide" },
          { label: "Availability", value: "Freelance" }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2 text-gradient glow-text">{stat.value}</div>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-(--muted) uppercase">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
