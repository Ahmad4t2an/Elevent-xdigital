import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import logoSrc from "/logo.png";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialIcons = [
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaTiktok, href: "#", label: "TikTok" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  /* Auto-hide on scroll down / show on scroll up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) { setVisible(true); }
      else if (y > lastY.current + 4) { setVisible(false); setIsOpen(false); }
      else if (y < lastY.current - 4) { setVisible(true); }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ transition: "transform 0.35s ease, background 0.3s ease" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/8
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">

          {/* ── LOGO ─────────────────── */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src={logoSrc}
              alt="ElevateX Digital"
              style={{ height: 55, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── NAV LINKS (desktop) ───── */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  style={{ transition: "color 0.3s ease" }}
                  className={`relative px-3 py-2 text-sm font-medium group
                    ${isActive ? "text-[#0066ff]" : "text-white/70 hover:text-white"}`}
                >
                  {link.name}
                  {/* Underline bar */}
                  <span
                    style={{ transition: "transform 0.3s ease" }}
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0066ff] origin-left rounded-full
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── RIGHT SIDE (desktop) ───── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">

            {/* Divider */}
            <div className="w-px h-5 bg-white/15" />

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ transition: "color 0.3s ease, transform 0.3s ease" }}
                  className="text-[#0066ff] hover:text-white hover:scale-125 block"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-white/15" />

            {/* Contact Us button */}
            <a
              href="https://wa.me/923414498408"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "background 0.3s ease, color 0.3s ease" }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#0066ff] text-[#0066ff] text-xs font-semibold hover:bg-[#0066ff] hover:text-white"
            >
              <FaPhoneAlt size={11} /> Contact Us
            </a>
          </div>

          {/* ── HAMBURGER (mobile) ───── */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ transition: "color 0.3s ease" }}
              className="text-white/80 hover:text-[#0066ff] p-1.5"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────── */}
      <div
        style={{ transition: "max-height 0.35s ease, opacity 0.3s ease" }}
        className={`md:hidden overflow-hidden bg-black/95 border-b border-white/10
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                style={{ transition: "color 0.3s ease, background 0.3s ease" }}
                className={`block px-4 py-2.5 rounded-md text-sm font-medium
                  ${isActive ? "text-[#0066ff] bg-[#0066ff]/8" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 px-4 pt-3 pb-2 border-t border-white/10 mt-1">
            {socialIcons.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                style={{ transition: "color 0.3s ease, transform 0.3s ease" }}
                className="text-[#0066ff] hover:text-white hover:scale-125 block">
                <Icon size={16} />
              </a>
            ))}
            <a
              href="https://wa.me/923414498408"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "background 0.3s ease, color 0.3s ease" }}
              className="ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#0066ff] text-[#0066ff] text-xs font-semibold hover:bg-[#0066ff] hover:text-white"
            >
              <FaPhoneAlt size={11} /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
