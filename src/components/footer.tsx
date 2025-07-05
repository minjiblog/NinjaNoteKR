import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} NinjaNote KR — 비공식 팬 사이트 · <Link href="/privacy" className="underline hover:text-primary-600 dark:hover:text-primary-400 ml-1">개인정보처리방침</Link>
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://twitter.com/ninjadao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://discord.gg/ninjadao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12h6m-6 4h6m-6-8h6" />
                <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                <path d="M8 2v3" />
                <path d="M16 2v3" />
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://github.com/ninjadao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
            <p className="text-xs text-gray-500 dark:text-gray-600 mt-4">
            CryptoNinja™ 및 모든 관련 IP는 Ninja DAO 및 Bucket Inc.의 자산입니다. 본 사이트는 공식 조직과 제휴되어 있지 않습니다.
        </p>
      </footer>
  );
}


