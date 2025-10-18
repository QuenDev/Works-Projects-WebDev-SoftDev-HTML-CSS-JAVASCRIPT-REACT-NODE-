import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Subtext */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/marci-logo.png"
            alt="Marci Metzger"
           className="h-12 w-auto object-contain rounded-md"
          />
          <span className="hidden sm:block text-xs text-gray-500 tracking-wide">
            The Ridge Realty Group
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {[
            { href: '#about', label: 'About' },
            { href: '#listings', label: 'Listings' },
            { href: '#gallery', label: 'Gallery' },
            { href: '#testimonials', label: 'Testimonials' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <a
            href="#contact"
            className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md shadow-sm hover:bg-blue-700 transition-colors"
          >
            Call
          </a>
        </div>
      </div>
    </header>
  );
}
