"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg transition-transform hover:scale-105">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
              SmartPOS
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-medium text-gray-700 transition-all hover:text-blue-600"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 block rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-center font-semibold text-white transition-all hover:shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
