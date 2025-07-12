import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} NinjaNote KR — 비공식 팬 사이트 · <Link href="/privacy" className="underline hover:text-primary-600 dark:hover:text-primary-400 ml-1">개인정보처리방침</Link>
          </p>
        </div>
      </div>

    </footer>
  );
}

