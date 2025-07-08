"use client";

import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "#mycnpstory | NinjaNote KR",
  description: "MINJI의 #mycnpstory 트위터 스레드 정리 페이지.",
};

export default function MyCNPStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-emerald-300 to-emerald-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">#mycnpstory</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            CNP와 함께한 나의 여정을 공유합니다.
          </p>
        </div>
      </section>

      {/* Embedded tweet thread */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-lg mx-auto">
          <blockquote className="twitter-tweet" data-lang="ko">
            <a href="https://twitter.com/minjiblogg/status/1759366263988691198"></a>
          </blockquote>
        </div>
        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          전체 스레드는
          <Link
            href="https://x.com/minjiblogg/status/1759366263988691198"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            트위터에서 확인할 수 있습니다 →
          </Link>
        </p>
      </section>
    </>
  );
}
