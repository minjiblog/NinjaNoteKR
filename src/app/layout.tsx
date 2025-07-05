

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';
import CookieConsent from '@/components/CookieConsent';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "NinjaNote KR",
  description: 'Ninja DAO와 CryptoNinja Partners 프로젝트 정보를 한국어로 쉽게 소개하는 팬 사이트입니다.',
  openGraph: {
    title: "NinjaNote KR",
    description: 'Ninja DAO와 CryptoNinja Partners 프로젝트 정보를 한국어로 쉽게 소개하는 팬 사이트입니다.',
    images: ['/images/hero-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavBar />
              
            
          
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}


