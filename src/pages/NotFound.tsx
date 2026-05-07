import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-(--accent)" />
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Error · 404
        </span>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-7xl md:text-8xl leading-[0.95] tracking-tight mb-4"
      >
        404<span className="text-(--accent)">.</span>
      </motion.h1>
      <p className="font-mono text-(--muted) mb-10">// page not found</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-3 border border-(--line) hover:border-(--accent) transition-colors text-sm"
      >
        ← Back to index
      </Link>
    </div>
  );
}
