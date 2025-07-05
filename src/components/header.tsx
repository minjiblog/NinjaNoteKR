"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { name: "Ninja DAO", href: "#ninja-dao" },
  { name: "CNP", href: "#cnp" },
  { name: "Eœë“œEµ", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can safely show the UI
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brand">Ninja DAO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark shadow-lg">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


