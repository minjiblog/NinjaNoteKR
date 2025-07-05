"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
      <p className="text-gray-700 dark:text-gray-300">
        본 사이트는 서비스 개선을 위해 쿠키를 사용하며, 쿠키 수집에 대한 동의를 요청합니다.
      </p>
      <button
        onClick={accept}
        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm"
      >
        동의합니다
      </button>
    </div>
  );
}
