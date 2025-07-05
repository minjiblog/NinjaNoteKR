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
      <p className="text-xs text-gray-500 dark:text-gray-600 mt-4 text-center md:text-left">
        CryptoNinja™ 및 모든 관련 IP는 Ninja DAO 및 Bucket Inc.의 자산입니다. 본 사이트는 공식 조직과 제휴되어 있지 않습니다.
      </p>
    </footer>
  );
}

