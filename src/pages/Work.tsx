import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

const projects = [
  {
    year: "2026",
    title: "Next Commerce",
    desc: "Next.js storefront, server actions va Stripe checkout bilan production release.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    status: "live",
    demoLink: "#demo",
    codeLink: "#code",
  },
  {
    year: "2025",
    title: "SaaS Dashboard",
    desc: "Analytics dashboard, role-based UI va reusable component architecture.",
    tags: ["React", "Tailwind", "Chart.js"],
    status: "live",
    demoLink: "#demo",
    codeLink: "#code",
  },
  {
    year: "2024",
    title: "Content Platform",
    desc: "Editorial platforma uchun clean UI, search va markdown pipeline.",
    tags: ["Next.js", "MDX", "Prisma"],
    status: "archived",
    demoLink: "#demo",
    codeLink: "#code",
  },
];

export default function Work() {
  return (
    <motion.div
      variants={container}
      initial={false}
      animate="show"
      className="max-w-7xl"
    >
      {/* Header Area */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
        <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
          <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
            Selected Projects · 2024—2026
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4"
        >
          Featured <span className="text-gradient glow-text font-bold">Work.</span>
        </motion.h1>
      </div>

      {/* Grid for Project Cards */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={item}
            className={`group relative p-8 glass-panel hover:bg-white/5 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] md:hover:-translate-y-2 ${projects.length % 2 !== 0 && i === projects.length - 1 ? "lg:col-span-2 2xl:col-span-1 lg:w-3/4 2xl:w-full mx-auto 2xl:mx-0" : ""
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-(--muted) bg-(--line) px-3 py-1 rounded-full">
                {p.year}
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border shadow-sm ${p.status === "live"
                  ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-emerald-500/20"
                  : "border-(--line) text-(--muted)"
                  }`}
              >
                {p.status}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold mb-3 text-white">
              {p.title}
            </h3>
            <p className="text-(--muted) text-sm leading-relaxed mb-8 flex-grow">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 items-center mt-auto pt-6 border-t border-(--line)">
              <a href={p.demoLink} className="text-sm font-medium text-white hover:text-(--accent) transition-colors inline-flex gap-1 items-center bg-white/10 px-4 py-2 rounded-full">
                Demo ↗
              </a>
              <a href={p.codeLink} className="text-sm font-medium text-(--muted) hover:text-white transition-colors inline-flex gap-1 items-center">
                Code ↗
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
