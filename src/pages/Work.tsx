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
      <motion.div variants={item} className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-(--accent)" />
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Selected Projects · 2024—2026
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4"
      >
        Work<span className="text-(--accent)">.</span>
      </motion.h1>

      <motion.p variants={item} className="font-mono text-(--muted) mb-14">
        // frontend projects with React and Next.js
      </motion.p>

      {/* Grid for Project Cards */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-8">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={item}
            className="group relative p-8 rounded-2xl border border-(--line) bg-(--bg) hover:bg-(--surface) md:hover:-translate-y-2 hover:shadow-2xl hover:shadow-(--accent)/10 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs text-(--muted)">
                {p.year}
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${p.status === "live"
                  ? "border-emerald-500/30 text-emerald-600 bg-emerald-500/5"
                  : "border-(--line) text-(--muted)"
                  }`}
              >
                {p.status}
              </span>
            </div>

            <h3 className="text-2xl font-medium mb-3 text-(--text) group-hover:text-(--accent) transition-colors">
              {p.title}
            </h3>
            <p className="text-(--soft) text-sm leading-relaxed mb-8 flex-grow">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-(--line)/40 text-[11px] font-mono text-(--muted)"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 items-center mt-auto pt-4 border-t border-(--line)/50">
              <a href={p.demoLink} className="text-sm font-medium text-(--text) hover:text-(--accent) transition-colors inline-flex gap-1 items-center">
                Demo <span className="text-(--accent)">↗</span>
              </a>
              <a href={p.codeLink} className="text-sm font-medium text-(--text) hover:text-(--accent) transition-colors inline-flex gap-1 items-center">
                Code <span className="text-(--accent)">↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
