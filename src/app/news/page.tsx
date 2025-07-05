"use client";

import Link from "next/link";

const dummyNews = [
  {
    id: 1,
    date: "2025-07-01",
    title: "Ninja DAO, 신규 파트너십 발표",
    source: "Twitter",
    url: "#",
  },
  {
    id: 2,
    date: "2025-06-29",
    title: "CryptoNinja, 한정판 NFT 드롭 예고",
    source: "Discord",
    url: "#",
  },
  {
    id: 3,
    date: "2025-06-25",
    title: "CNP, 커뮤니티 이벤트 개최",
    source: "Medium",
    url: "#",
  },
];

export default function NewsPage() {
  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest News</h1>
        <ul className="space-y-6">
          {dummyNews.map((news) => (
            <li
              key={news.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{news.date}</p>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{news.source}</p>
              </div>
              <Link
                href={news.url}
                target="_blank"
                className="mt-2 md:mt-0 inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm"
              >
                자세히
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
