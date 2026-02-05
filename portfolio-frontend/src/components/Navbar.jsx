import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "top" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  /* 🔹 Navbar Blur on Scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          "bg-white/60",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-black/40"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white/60",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-black/40"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔹 Active Section Highlight */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full px-6 lg:px-12 xl:px-[8%] py-5 flex items-center justify-between z-50 transition-all duration-300"
    >
      {/* LEFT LOGO */}
      <a href="#top">
        <div className="px-4 py-2 rounded-xl border border-gray-300 dark:border-white/30 bg-white/70 dark:bg-transparent shadow-sm font-mono text-lg text-indigo-500">
          &lt; Vignesh /&gt;
        </div>
      </a>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 rounded-full px-10 py-3 bg-white/70 backdrop-blur-md shadow-sm font-Ovo dark:bg-white/5 border border-white/10">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`transition ${
                active === link.id
                  ? "text-indigo-500 font-semibold"
                  : "hover:text-indigo-500"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className={`transition ${
              active === link.id
                ? "text-indigo-400 font-semibold"
                : "hover:text-indigo-400"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
