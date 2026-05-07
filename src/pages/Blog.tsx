import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

const posts = [
  {
    date: "2026 · Jan 18",
    title: "Next.js App Router da layout strategiyalari",
    desc: "Nested layout, loading boundaries va server components workflow.",
    read: "6 min",
  },
  {
    date: "2025 · Nov 02",
    title: "Minimal portfolio arxitekturasi",
    desc: "Qanday qilib oddiy structure bilan kuchli personal brand quriladi.",
    read: "4 min",
  },
  {
    date: "2025 · Sep 15",
    title: "React animation patterns",
    desc: "Framer Motion bilan page transitions va reveal animatsiyalar.",
    read: "5 min",
  },
];

export default function Blog() {
  return (
    <motion.div
      variants={container}
      initial={false}
      animate="show"
      className="max-w-3xl"
    >
      <motion.div variants={item} className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-(--accent)" />
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Notes · Frontend · Next.js
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4"
      >
        Blog<span className="text-(--accent)">.</span>
      </motion.h1>

      <motion.p variants={item} className="font-mono text-(--muted) mb-14">
        // o'rgangan narsalarimni qisqa yozuvlarda ulashaman
      </motion.p>

      <motion.div variants={item} className="border-t border-(--line)">
        {posts.map((p) => (
          <motion.article
            key={p.title}
            variants={item}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-6 border-b border-(--line) group hover:pl-2 transition-all duration-300 cursor-pointer"
          >
            <span className="font-mono text-xs text-(--muted) md:w-32 shrink-0">
              {p.date}
            </span>
            <div className="flex-1">
              <h3 className="text-lg mb-1.5 group-hover:text-(--accent) transition-colors">
                {p.title}
              </h3>
              <p className="text-(--soft) text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
            <span className="font-mono text-[11px] text-(--muted) md:w-16 text-right shrink-0">
              {p.read}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
