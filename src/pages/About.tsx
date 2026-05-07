import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

const stack = {
  Core: ["HTML/CSS", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Tools: ["Git", "Netlify", "Vercel", "Figma"],
};

const timeline = [
  { year: "2021", title: "Frontend yo'liga birinchi qadam" },
  { year: "2023", title: "React ecosystem va chuqurroq UI dizayn" },
  { year: "2024", title: "Next.js full-stack va production tajribasi" },
  { year: "2026", title: "Freelance loyihalar va masofaviy jamoaviy yechimlar" },
];

export default function About() {
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
          About · Background · Skills
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4"
      >
        About<span className="text-(--accent)">.</span>
      </motion.h1>

      <motion.p variants={item} className="font-mono text-(--muted) mb-12">
        // frontend yo'nalishida 2021-yildan beri
      </motion.p>

      <motion.div
        variants={item}
        className="text-(--soft) text-lg leading-relaxed mb-16 space-y-6"
      >
        <p>
          Men <span className="text-(--text) font-medium">Zubayr</span>, O'zbekistondan frontend dasturchiman. Interfeys aniqligi, tezkor ishlash qobiliyati va qulay UX ustida ishlashni eng asosiy ustuvorlik deb bilaman. Mening asosiy ixtisosligim zamonaviy <span className="text-(--text) font-medium">React va Next.js</span> ekotizimidir.
        </p>
        <p className="text-base">
          Har bir yozilayotgan komponent nafaqat chiroyli ko'rinishi, balki oson qo'llab-quvvatlanadigan (maintainable) toza kod bo'lishi tarafdoriman. Bo'sh vaqtlarimda open source loyihalar ko'rishni va minimalistik UI/UX dizayn trendlarini tahlil qilishni yoqtiraman.
        </p>
      </motion.div>

      {/* stack / skills */}
      <motion.div variants={item} className="mb-16">
        <h2 className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono mb-8">
          -- skills
        </h2>
        <div className="space-y-8">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 flex-shrink-0">
                <h3 className="font-mono text-xs text-(--text)">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-(--line) bg-(--bg) hover:border-(--accent) hover:text-(--accent) text-xs font-mono text-(--soft) transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* timeline */}
      <motion.div variants={item}>
        <h2 className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono mb-8">
          -- timeline
        </h2>
        <div className="border-l border-(--line) pl-6 space-y-8 ml-2">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-(--bg) border-2 border-(--muted)" />
              <p className="font-mono text-xs text-(--muted) mb-1">{t.year}</p>
              <p className="text-(--text) text-lg">{t.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
