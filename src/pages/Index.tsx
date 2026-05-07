import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container, item } from "../lib/motion";
import Magnetic from "../components/Magnetic";

const metrics = [
  { label: "Status", value: "Open to roles" },
  { label: "Focus", value: "React · Next.js" },
  { label: "Since", value: "2021" },
  { label: "Projects", value: "1 live" },
];

export default function Index() {
  return (
    <motion.div
      variants={container}
      initial={false}
      animate="show"
      className="max-w-4xl"
    >
      {/* tag line */}
      <motion.div variants={item} className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-(--accent)" />
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Frontend Developer · Tashkent
        </span>
      </motion.div>

      {/* heading */}
      <motion.h1
        variants={item}
        className="font-serif text-7xl md:text-8xl leading-[0.95] tracking-tight mb-4"
      >
        Zubayr<span className="text-(--accent)">.</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="font-mono text-(--muted) text-lg mb-12"
      >
        // frontend developer
      </motion.p>

      {/* intro text */}
      <motion.div
        variants={item}
        className="space-y-5 text-(--soft) text-lg leading-relaxed max-w-2xl mb-14"
      >
        <p>
          2021-yildan beri kod yozaman.{" "}
          <span className="text-(--text) font-medium">React, Next.js</span>{" "}
          va toza interfeys qurishga ixtisoslashganman. Tez, aniq va minimalist
          UI tarafdoriman.
        </p>
        <p className="text-(--muted) text-base">
          Hozirda freelance va remote loyihalar bilan ishlayman. Yangi
          imkoniyatlarga ochiqman.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div variants={item} className="flex flex-wrap gap-3">
        <Magnetic>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 border border-(--line) hover:border-(--accent) transition-colors duration-200 text-sm tracking-wide rounded-md"
          >
            Work
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-(--line) hover:border-(--accent) transition-colors duration-200 text-sm tracking-wide rounded-md"
          >
            Contact <span>↗</span>
          </Link>
        </Magnetic>
      </motion.div>

      {/* metrics — flat inline, no separate card wrappers */}
      <motion.div
        variants={item}
        className="mt-16 pt-6 border-t border-(--line)"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--muted) mb-1.5">
                {m.label}
              </p>
              <p className="text-xl leading-tight">{m.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
