"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ninjadao", label: "Ninja DAO" },
    { href: "/cryptoninja", label: "CryptoNinja" },
    { href: "/cryptoninjapartners", label: "CNP" },
    { href: "/news", label: "News" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-primary-600 dark:text-primary-400" onClick={()=>setMenuOpen(false)}>
          NinjaNote KR
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname===item.href ? "text-primary-600 dark:text-primary-400" : "hover:text-primary-600"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-xl"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
        {/* mobile toggle */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4 space-y-3 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="block mt-2"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      )}
    </header>
  );
}


