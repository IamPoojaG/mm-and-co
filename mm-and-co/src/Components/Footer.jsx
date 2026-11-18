import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.05fr_1.2fr_1fr_auto] md:items-center">
        <Logo />
        <div className="flex gap-3 text-sm text-slate-300">
          <MapPin className="mt-1 shrink-0 text-orange" size={21} />
          <span>
            No. 2, Survey Number 23/1,
            <br />
            Nagadasanahalli, Yelahanka Taluk,
            <br />
            Bengaluru – 560064
          </span>
        </div>
        <a
          className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
          href="mailto:hmuralikrish1991@gmail.com"
        >
          <Mail className="text-orange" size={21} /> hmuralikrish1991@gmail.com
        </a>
        <div className="flex gap-3">
          <a
            className="social-link"
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            className="social-link"
            href="tel:+910000000000"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} MM AND CO. All Rights Reserved.
          </span>
          <span>Building a Stronger Tomorrow</span>
        </div>
      </div>
    </footer>
  );
}
