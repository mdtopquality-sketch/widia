"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/widia-content";

const navLinks = [
  { href: "#cosa-compriamo", label: "Cosa Compriamo" },
  { href: "#cos-e-il-widia", label: "Cos'è il Widia" },
  { href: "#zone-servite", label: "Zone Servite" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Blocca scroll body quando menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled ? "shadow-md border-border" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              Widia<span className="text-primary"> Bari e Puglia</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* WhatsApp mobile + Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            <button
              className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className="block transition-all duration-300"
                style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
            </div>
        </div>
      </nav>

      {/* Spacer per compensare navbar fixed */}
      <div className="h-16" />

      {/* Overlay mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b border-border shadow-xl transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-6 py-4 rounded-xl text-base font-semibold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={20} />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
