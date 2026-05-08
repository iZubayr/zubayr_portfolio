import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

const stack = {
  Core: ["HTML/CSS", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Tools: ["Git", "Netlify", "Vercel", "Figma"],
};

export default function About() {
  return (
    <motion.div
      variants={container}
      initial={false}
      animate="show"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Behind the Screen
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-5xl md:text-7xl tracking-tight mb-8 drop-shadow-sm text-white"
      >
        I build experiences that <span className="text-gradient glow-text font-bold">connect.</span>
      </motion.h1>

      <motion.div variants={item} className="glass-panel p-8 md:p-10 mb-16 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-(--accent)/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <p className="text-lg text-(--text) leading-relaxed relative z-10">
          Hi, I'm <span className="text-white font-medium">Zubayr</span>, a frontend developer focused on creating hyper-optimized, visually captivating web interfaces. My approach merges profound technical architecture with awe-inspiring and modern design principles. Every project I touch is designed to be accessible, scalable, and impossible to ignore.
        </p>
      </motion.div>

      <motion.div variants={item} className="mb-16">
        <h2 className="text-3xl font-serif text-white mb-8">The Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(stack).map(([category, items], i) => (
            <div key={category} className={`glass p-8 rounded-3xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 ${i === 1 ? 'md:-translate-y-6' : ''}`}>
              <h3 className="font-mono text-sm tracking-widest text-(--accent) uppercase mb-6 drop-shadow-md">
                {category}
              </h3>
              <ul className="flex flex-col gap-4">
                {items.map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-(--soft)">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="font-medium text-white shadow-black drop-shadow-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
