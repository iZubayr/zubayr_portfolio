import { useState } from "react";
import { motion } from "framer-motion";
import { container, item } from "../lib/motion";

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
    const subject = encodeURIComponent(`New message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:zubayr.un@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <motion.div variants={container} initial={false} animate="show" className="max-w-4xl mx-auto">
      <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
        <span className="text-[11px] tracking-[0.25em] text-(--muted) uppercase font-mono">
          Collaboration
        </span>
      </motion.div>

      <motion.h1 variants={item} className="font-serif text-5xl md:text-7xl tracking-tight mb-8 text-white">
        Start a <span className="text-gradient glow-text font-bold">Project.</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-16">
        <motion.div variants={item} className="flex flex-col gap-10">
          <div>
            <h3 className="text-[11px] font-mono tracking-widest text-(--muted) uppercase mb-6">Connect</h3>
            <div className="flex flex-col gap-4">
              {channels.map((chan) => (
                <a key={chan.label} href={chan.href} target="_blank" rel="noreferrer" className="group flex flex-col p-5 rounded-2xl glass hover:bg-white/10 border border-(--line) hover:border-(--accent)/50 transition-all duration-300">
                  <span className="text-(--muted) text-xs mb-1 font-mono">{chan.label}</span>
                  <span className="text-white font-medium text-lg flex justify-between items-center group-hover:text-(--accent) transition-colors">
                    {chan.value}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form variants={item} onSubmit={onSubmit} className="glass-panel p-8 md:p-10 flex flex-col gap-8 shadow-(--accent-glow)/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-700">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-mono tracking-widest text-(--accent) uppercase drop-shadow-sm">Name</label>
            <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-black/20 border-b-2 border-(--line) focus:border-(--accent) pb-3 pt-2 text-white outline-none transition-colors placeholder:text-(--muted)/50" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-mono tracking-widest text-(--accent) uppercase drop-shadow-sm">Email</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-black/20 border-b-2 border-(--line) focus:border-(--accent) pb-3 pt-2 text-white outline-none transition-colors placeholder:text-(--muted)/50" placeholder="john@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-mono tracking-widest text-(--accent) uppercase drop-shadow-sm">Details</label>
            <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-black/20 border-b-2 border-(--line) focus:border-(--accent) pb-3 pt-2 text-white outline-none transition-colors resize-none placeholder:text-(--muted)/50" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" disabled={sent} className="mt-4 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-(--accent) hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] disabled:opacity-50 w-full overflow-hidden relative">
            <span className="relative z-10">{sent ? "Message Ready ↗" : "Send Inquiry"}</span>
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}
