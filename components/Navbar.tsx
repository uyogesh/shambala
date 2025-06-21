import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  navLinks: NavLink[];
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-slate-900/80 shadow-2xl shadow-sky-900/30 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
              aria-label="Shambala LLC Home"
            >
              <svg
                className="h-10 w-auto text-sky-400 group-hover:text-sky-300 transition-colors duration-200"
                viewBox="0 0 70 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <title>Shambala LLC Logo - Serene Peaks</title>
                {/* Base Layer / Outer Mountains - Softer, wider */}
                <path 
                  d="M0 40 C10 30, 20 30, 25 20 C30 10, 40 10, 45 20 C50 30, 60 30, 70 40 Z" 
                  fillOpacity="0.3" 
                />
                {/* Middle Layer / Flanking Peaks - Slightly more defined */}
                <path 
                  d="M5 40 C15 25, 22 25, 28 15 C32 8, 38 8, 42 15 C48 25, 55 25, 65 40 Z" 
                  fillOpacity="0.6"
                />
                {/* Central Peak / Path to Shambala - Most prominent */}
                <path 
                  d="M15 40 C25 20, 30 15, 35 5 C40 15, 45 20, 55 40 Z" 
                />
              </svg>
              <span
                className="ml-2.5 text-3xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors duration-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {companyName}
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-200 hover:bg-slate-700 hover:text-sky-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;