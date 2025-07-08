"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Fan-site disclaimer banner */}
      <div className="bg-yellow-100 dark:bg-yellow-800 text-xs sm:text-sm text-center text-gray-800 dark:text-gray-200 py-2 px-4">
        ⚠️ 이 사이트는 팬인 <span className="font-semibold">MINJI</span>가 제작한 비공식 정보 허브입니다. 공식 일본어 사이트는
        <a
          href="https://www.cryptoninja-partners.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          cryptoninja-partners.xyz
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-sky-300 to-sky-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NinjaNote KR
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ninja DAO & CryptoNinja Partners 정보를 한국어로 쉽게 소개하는 팬 사이트입니다.
          </motion.p>
          <motion.a
            href="/ninjadao"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            자세히 보기 →
          </motion.a>
        </div>
      </section>

      {/* MINJI Intro */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.img
            src="/images/creator/minji-profile.png"
            alt="MINJI Avatar"
            className="mx-auto mb-6 rounded-full shadow-lg w-32 h-32 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.h2
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            안녕하세요, <span className="font-semibold">MINJI</span> 입니다!
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            이 사이트는 MINJI가 만든 Ninja DAO 및 CryptoNinja Partners 관련 비공식 팬사이트입니다.
Ninja DAO와 CryptoNinja Partners의 다양한 프로젝트 정보를 한국어로 정리해 공유합니다.
Web3와 NFT가 처음이신 분들도 부담 없이 자유롭게 둘러보세요!
          </motion.p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://x.com/minjiblogg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
            >
              X (트위터)
            </a>
            <a
              href="/mycnpstory"
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
            >
              #mycnpstory →
            </a>
          </div>
        </div>
      </section>

      {/* Site Overview Cards */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">사이트 둘러보기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                href: "/ninjadao",
                title: "Ninja DAO",
                desc: "28,000+ 멤버의 일본 최대 Web3 커뮤니티",
              },
              {
                href: "/cryptoninjapartners",
                title: "CryptoNinja Partners",
                desc: "대중적 PFP NFT 프로젝트 & 2차 창작 허브",
              },
              {
                href: "/cryptoninja",
                title: "CryptoNinja Projects",
                desc: "만화·게임 등 IP 확장 프로젝트",
              },
            ].map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="block bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-md p-8 transition transform hover:-translate-y-1 text-left"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 최신 소식 */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">Latest News</h2>
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
            {[
              {
                id: 1,
                date: "2025-07-01",
                title: "CNP, 7월 2~4일 개최 라이선싱 재팬 참가",
                source: "PR TIMES",
                url: "https://prtimes.jp/main/html/rd/p/000000109.000012092.html",
              },
              {
                id: 2,
                date: "2025-06-25",
                title: "‘숨지 않는! 크립토닌자 사쿠야’ 시즌3, 7월 7일 방송 시작",
                source: "Yahoo!뉴스",
                url: "https://news.yahoo.co.jp/articles/3dcf48c9bd321269d6a2facb271e8e814b9942df",
              },
              {
                id: 3,
                date: "2025-03-07",
                title: "RED° DRONES, CNP 연계 드론쇼 개최",
                source: "PR TIMES",
                url: "https://prtimes.jp/main/html/rd/p/000000123.000072682.html",
              },
            ].map((news) => (
              <li key={news.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">{news.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{news.source}</p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  자세히 보기 →
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/news"
            className="inline-block mt-8 text-primary-600 dark:text-primary-400 hover:underline font-semibold"
          >
            전체 뉴스 보기 →
          </a>
        </div>
      </section>

      {/* 핵심 콘텐츠 */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">핵심 콘텐츠</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              {
                href: "/ninjadao",
                title: "Ninja DAO란?",
                desc: "일본 최대 NFT·Web3 커뮤니티 소개",
              },
              {
                href: "/cryptoninjapartners",
                title: "CNP란?",
                desc: "대중적 PFP NFT 프로젝트 핵심 정리",
              },
              {
                href: "/cryptoninja",
                title: "CryptoNinja IP 확장",
                desc: "만화·게임·굿즈 등 확장 사례",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-md p-8 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-10 px-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300">
        <p>
          © 2025 MINJI — Unofficial fan site. Not affiliated with CryptoNinja Partners.
        </p>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mt-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </footer>
    </>
  );
}


