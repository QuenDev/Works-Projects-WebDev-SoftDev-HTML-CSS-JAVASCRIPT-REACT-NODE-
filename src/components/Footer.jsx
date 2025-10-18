import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative z-10">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-sm text-blue-100">
          © {new Date().getFullYear()} <span className="font-semibold">Marci Metzger Homes</span> — All Rights Reserved
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-lg">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="#"
            className="ml-3 text-sm text-blue-200 hover:text-blue-300 transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>

      {/* Soft top border glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 opacity-70"></div>
    </footer>
  )
}
