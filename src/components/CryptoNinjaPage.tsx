"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cryptoNinjaProjects } from "@/data/cryptoNinjaProjects";

export default function CryptoNinjaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-secondary-300 to-secondary-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CryptoNinja
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            2021년 9월 출시된 일본발 닌자 테마 NFT 컬렉션
          </motion.p>
          <motion.a
            href="https://www.ninja-dao.com/characters"
            className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            캐릭터 보기 →
          </motion.a>
        </div>
      </section>


      {/* Project Sets */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-16">
          {cryptoNinjaProjects.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-secondary-600 hover:bg-secondary-700 text-white text-sm font-medium px-5 py-2 rounded-full transition"
                  >
                    공식 링크 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
