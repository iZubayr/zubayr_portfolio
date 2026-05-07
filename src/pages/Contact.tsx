import { useState } from "react";
import { motion } from "framer-motion";
import { container, item } from "../lib/motion";
import Magnetic from "../components/Magnetic";

const channels = [
  { label: "Email", value: "zubayr.un@gmail.com", href: "mailto:zubayr.un@gmail.com" },
  { label: "Telegram", value: "@iboglanish_bot", href: "https://t.me/iboglanish_bot" },
  { label: "GitHub", value: "@iZubayr", href: "https://github.com/iZubayr" },
  { label: "LinkedIn", value: "in/izubayr", href: "https://linkedin.com/in/izubayr" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:zubayr.un@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

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
          Contact · Collaboration
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4"
      >
        Contact<span className="text-(--accent)">.</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="font-mono text-(--muted) mb-12"
      >
        // tez javob: odatda 24 soat ichida
      </motion.p>

      {/* ─── short form ─── */}
      <motion.form
        variants={item}
        onSubmit={onSubmit}
        className="space-y-6 mb-14"
      >
        <label className="block border-b border-(--line) pb-4">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--accent) block mb-2">
            Name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Ismingiz"
            className="w-full bg-transparent text-(--text) placeholder:text-(--muted) outline-none text-base"
          />
        </label>

        <label className="block border-b border-(--line) pb-4">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--accent) block mb-2">
            Email
          </span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@example.com"
            className="w-full bg-transparent text-(--text) placeholder:text-(--muted) outline-none text-base"
          />
        </label>

        <label className="block border-b border-(--line) pb-4">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--accent) block mb-2">
            Message
          </span>
          <textarea
            required
            rows={3}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="Loyiha haqida qisqacha..."
            className="w-full bg-transparent text-(--text) placeholder:text-(--muted) outline-none text-base resize-none"
          />
        </label>

        <div className="flex items-center gap-4 pt-2">
          <Magnetic>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-(--line) hover:border-(--accent) text-sm tracking-wide rounded-md transition-colors"
            >
              Send
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </Magnetic>
          {sent && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-(--muted)"
            >
              // mail klient ochildi
            </motion.span>
          )}
        </div>
      </motion.form>

      {/* ─── channels ─── */}
      <motion.div variants={item} className="border-t border-(--line)">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-baseline justify-between py-4 border-b border-(--line) hover:pl-2 transition-all duration-300"
          >
            <span className="text-(--muted) text-sm w-24">{c.label}</span>
            <span className="flex-1 group-hover:text-(--accent) transition-colors">
              {c.value}
            </span>
            <span className="text-(--muted) group-hover:text-(--accent) transition-colors">
              ↗
            </span>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
