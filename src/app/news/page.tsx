"use client";

import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "2025-06-25",
    title: "‘숨지 않는! 크립토닌자 사쿠야’ 시즌3, 7월 7일 방송 시작",
    source: "Yahoo!ニュース",
    url: "https://news.yahoo.co.jp/articles/3dcf48c9bd321269d6a2facb271e8e814b9942df",
  },
  {
    id: 2,
    date: "2025-03-07",
    title: "RED° DRONES, CNP 연계 드론쇼 개최",
    source: "PR TIMES",
    url: "https://prtimes.jp/main/html/rd/p/000000123.000072682.html",
  },
  {
    id: 2,
    date: "2025-07-01",
    title: "CNP, 7월 2~4일 개최 라이선싱 재팬 참가",
    source: "PR TIMES",
    url: "https://prtimes.jp/main/html/rd/p/000000109.000012092.html",
  },
  {
    id: 3,
    date: "2024-11-21",
    title: "NFT 트레이딩 카드, 3천억 엔 시장 공략? 진위 증명 ‘CNP 트레카’ 12월 출시",
    source: "CoinDesk Japan",
    url: "https://www.coindeskjapan.com/260507/",
  },
];

// 최신 날짜 순 정렬
const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-emerald-300 to-emerald-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Ninja DAO & CryptoNinja Partners 최신 소식을 한눈에 확인하세요.
          </p>
        </div>
      </section>

      <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest News</h1>
        <ul className="space-y-6">
          {sortedNews.map((news: any) => (
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
    </>
  );
}
