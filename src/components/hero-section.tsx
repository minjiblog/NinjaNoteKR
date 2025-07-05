"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { allHeroes } from "contentlayer/generated";

export default function HeroSection() {
  const hero = allHeroes[0];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 dark:opacity-10"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href={hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {hero.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


