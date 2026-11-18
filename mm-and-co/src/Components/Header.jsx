import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Our Products", "#products"],
  ["Why Us", "#why-us"],
  ["Our Clients", "#clients"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-md">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {links.map(([label, href], i) => (
            <a
              key={label}
              href={href}
              className={`nav-link ${i === 0 ? "active" : ""}`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-3">
            Get In Touch <ArrowRight size={15} />
          </a>
        </nav>
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Get In Touch <ArrowRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
