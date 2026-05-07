import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* ── nav items ──────────────────────────────── */
const nav = [
  { to: "/", label: "Index", n: "01" },
  { to: "/work", label: "Work", n: "02" },
  { to: "/about", label: "About", n: "03" },
  { to: "/blog", label: "Blog", n: "04" },
  { to: "/contact", label: "Contact", n: "05" },
];

const elsewhere = [
  { label: "GitHub", value: "@iZubayr", href: "https://github.com/iZubayr" },
  { label: "LinkedIn", value: "in/izubayr", href: "https://linkedin.com/in/izubayr" },
  { label: "Telegram", value: "@iboglanish_bot", href: "https://t.me/iboglanish_bot" },
  { label: "Email", value: "zubayr.un@gmail.com", href: "mailto:zubayr.un@gmail.com" },
];

/* ── clock ──────────────────────────────────── */
function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ── theme types & icons ────────────────────── */
type Theme = "dark" | "light";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle({
  theme,
  onToggle,
  className = "",
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggle}
      className={`w-9 h-9 inline-flex items-center justify-center rounded-md border border-(--line) text-(--muted) hover:text-(--text) hover:border-(--accent) transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="inline-block"
          >
            <SunIcon className="w-[18px] h-[18px]" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="inline-block"
          >
            <MoonIcon className="w-[18px] h-[18px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ── sidebar ────────────────────────────────── */
function Sidebar({
  onNavigate,
  showBrand = true,
}: {
  onNavigate?: () => void;
  showBrand?: boolean;
}) {
  return (
    <aside className="flex flex-col h-full">
      {/* brand — hidden in mobile drawer since mobile top bar shows it */}
      {showBrand && (
        <Link
          to="/"
          onClick={onNavigate}
          className="block px-6 py-6 border-b border-(--line)"
        >
          <div className="font-mono text-[11px] tracking-[0.25em] text-(--muted)">
            ZUBAYR.DEV
          </div>
        </Link>
      )}

      {/* profile card */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-(--surface) border border-(--line) flex items-center justify-center">
            <span className="font-serif text-xl text-(--accent)">Z</span>
          </div>
          <div>
            <div className="text-(--text) font-medium">Zubayr</div>
            <div className="text-[11px] tracking-[0.2em] text-(--muted) font-mono uppercase">
              Frontend Developer
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="px-6 mt-10">
        <div className="text-[11px] tracking-[0.25em] text-(--muted) font-mono mb-4">
          -- NAVIGATE
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-3 py-2.5 rounded-md transition-colors duration-200 ${isActive
                  ? "bg-(--surface) text-(--text)"
                  : "text-(--muted) hover:text-(--text) hover:bg-(--surface)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="font-mono text-xs text-(--muted)">
                    {item.n}
                  </span>
                  <span className="text-[15px] flex-1">{item.label}</span>
                  <span
                    className={`text-(--accent) transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                      }`}
                  >
                    →
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* elsewhere links */}
      <div className="px-6 mt-auto pt-10 pb-6">
        <div className="text-[11px] tracking-[0.25em] text-(--muted) font-mono mb-4">
          -- ELSEWHERE
        </div>
        <div className="space-y-2.5">
          {elsewhere.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between text-sm"
            >
              <span className="text-(--text) group-hover:text-(--accent) transition-colors">
                {e.label}
              </span>
              <span className="font-mono text-xs text-(--muted) group-hover:text-(--accent) transition-colors">
                {e.value} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ── page header (content area top) ─────────── */
function PageHeader({
  theme,
  onThemeToggle,
}: {
  theme: Theme;
  onThemeToggle: () => void;
}) {
  const location = useLocation();
  const current =
    nav.find(
      (n) =>
        n.to === location.pathname ||
        (n.to !== "/" && location.pathname.startsWith(n.to))
    ) || { n: "404", label: "Not Found" };
  const time = useClock();

  return (
    <header className="hidden md:flex items-center justify-between px-6 lg:px-14 py-6 border-b border-(--line) gap-4 overflow-hidden">
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-(--muted) shrink-0 whitespace-nowrap">
        <span>{current.n}</span>
        <span>/</span>
        <span className="uppercase">{current.label}</span>
      </div>
      <div className="flex items-center gap-4 lg:gap-6 font-mono text-[11px] tracking-[0.25em] text-(--muted) shrink-0 whitespace-nowrap">
        <span className="hidden xl:inline">PORTFOLIO · 2026</span>
        <span className="hidden xl:inline">·</span>
        <span>{time}</span>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
}

/* ── app (root layout) ──────────────────────── */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // close mobile menu on route change + scroll top
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-(--bg) text-(--text) font-sans antialiased transition-colors duration-300"
    >
      {/* ─── mobile top bar ─── */}
      <div className="md:hidden flex items-center justify-between px-5 py-4 border-b border-(--line) sticky top-0 bg-(--bg)/90 backdrop-blur z-40">
        <Link
          to="/"
          className="font-mono text-[11px] tracking-[0.25em] text-(--text)"
        >
          ZUBAYR.DEV
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 inline-flex items-center justify-center text-(--text) font-mono text-xs border border-(--line) rounded-md"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      <div className="md:flex">
        {/* ─── sidebar desktop ─── */}
        <div className="hidden md:flex md:w-72 lg:w-80 border-r border-(--line) sticky top-0 h-screen overflow-y-auto">
          <Sidebar />
        </div>

        {/* ─── sidebar mobile drawer (no brand — top bar already shows it) ─── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed inset-0 top-[57px] z-30 bg-(--bg) overflow-y-auto"
            >
              <Sidebar
                showBrand={false}
                onNavigate={() => setMobileOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── main content ─── */}
        <main className="flex-1 min-w-0 flex flex-col min-h-screen">
          <PageHeader theme={theme} onThemeToggle={toggleTheme} />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="px-6 md:px-14 py-12 md:py-20 flex-1"
            >
              <Routes location={location}>
                <Route path="/" element={<Index />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          {/* ─── mobile footer ─── */}
          <footer className="md:hidden px-6 py-8 border-t border-(--line) mt-auto shrink-0">
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center mb-6">
              {elsewhere.map((e) => (
                <a key={e.label} href={e.href} className="text-[11px] font-mono text-(--muted) uppercase hover:text-(--accent)">
                  {e.label}
                </a>
              ))}
            </div>
            <div className="text-center font-mono text-[10px] text-(--muted) opacity-60">
              © 2026 ZUBAYR.DEV
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
