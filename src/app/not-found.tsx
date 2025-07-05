"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <h1 className="text-5xl font-bold mb-4 text-primary-600 dark:text-primary-400">404</h1>
      <p className="mb-8 text-center max-w-md">
        찾으시는 페이지를 발견하지 못했습니다. URL을 확인하거나 홈으로 돌아가 주세요.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full transition"
      >
        홈으로 이동
      </Link>
    </div>
  );
}
