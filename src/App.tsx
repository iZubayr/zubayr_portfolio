import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-(--accent) opacity-30 blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-indigo-500 opacity-20 blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}

function FloatingNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto sm:px-0 flex justify-center">
      <nav className="glass px-2 flex-wrap sm:flex-nowrap py-2 rounded-[2rem] sm:rounded-full flex items-center justify-center gap-1 sm:gap-2 shadow-2xl shadow-black/50">
        <Link to="/" className="px-3 hidden sm:block">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-(--accent) to-purple-400 flex items-center justify-center shadow-lg shadow-(--accent)/30">
            <span className="font-serif text-white font-bold leading-none text-lg">Z</span>
          </div>
        </Link>
        <div className="w-px h-6 bg-(--line) mx-1 hidden sm:block" />
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                isActive ? "text-white" : "text-(--muted) hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  const elsewhere = [
    { label: "GitHub", href: "https://github.com/iZubayr" },
    { label: "LinkedIn", href: "https://linkedin.com/in/izubayr" },
    { label: "Telegram", href: "https://t.me/iboglanish_bot" },
    { label: "Email", href: "mailto:zubayr.un@gmail.com" },
  ];
  return (
    <footer className="max-w-7xl mx-auto w-full py-12 border-t border-(--line) mt-32 flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="flex flex-wrap justify-center gap-6">
        {elsewhere.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-(--muted) hover:text-white hover:glow-text transition-all text-sm font-medium">
            {item.label}
          </a>
        ))}
      </div>
      <div className="text-(--muted) text-sm font-mono opacity-50">
        © 2026 ZUBAYR.DEV
      </div>
    </footer>
  );
}

export default function App() {
  const [theme] = useState<"dark">("dark"); // lock to dark mode for max wow factor
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div data-theme={theme} className="relative min-h-screen flex flex-col">
      <AmbientBackground />
      <FloatingNav />
      
      <main className="flex-1 flex flex-col pt-12 md:pt-24 px-6 md:px-14 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-7xl mx-auto w-full flex-1"
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
        <Footer />
      </main>
    </div>
  );
}
