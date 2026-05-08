import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

const posts = [
  {
    date: "May 2026",
    title: "Mastering React 19 Server Actions",
    desc: "A deep dive into how I transitioned a massive SaaS application to fully leverage the new Server Actions paradigm.",
    time: "5 min read",
  },
  {
    date: "Dec 2025",
    title: "The Death of Traditional CSS",
    desc: "Why Tailwind v4 changes the landscape of atomic styling permanently, and how to adapt your workflow.",
    time: "8 min read",
  },
  {
    date: "Sep 2025",
    title: "Minimalism vs. Glassmorphism",
    desc: "An architectural post-mortem analyzing what specific aesthetic hooks convert enterprise clients.",
    time: "6 min read",
  },
];

export default function Blog() {
  return (
    <motion.div variants={container} initial={false} animate="show" className="max-w-4xl mx-auto">
      <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Thoughts & Guides
        </span>
      </motion.div>

      <motion.h1 variants={item} className="font-serif text-5xl md:text-7xl tracking-tight mb-16 text-white">
        Latest <span className="text-gradient glow-text font-bold">Articles.</span>
      </motion.h1>

      <motion.div variants={item} className="flex flex-col gap-6">
        {posts.map((post) => (
          <motion.article key={post.title} className="glass-panel p-8 group cursor-pointer hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="font-mono text-[11px] tracking-widest text-(--accent) uppercase shrink-0 w-32 drop-shadow-sm">
                {post.date}
              </span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-2 group-hover:text-(--accent) transition-colors">
                  {post.title}
                </h3>
                <p className="text-(--soft) text-sm leading-relaxed mb-4">
                  {post.desc}
                </p>
                <div className="font-mono text-[10px] tracking-widest text-(--muted) uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                  {post.time}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
