"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CryptoNinjaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-secondary-300 to-secondary-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CryptoNinja
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            닌자 캐릭터 IP를 기반으로 한 일본발 NFT 프로젝트
          </motion.p>
          <motion.a
            href="https://www.ninja-dao.com/characters"
            className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            캐릭터 보기 →
          </motion.a>
        </div>
      </section>


      {/* Project Sets */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-16">
          {[
            {
              title: 'CryptoNinja NFT',
              desc: '일본인 일러스트레이터 Rii2가 디자인한 22,222개의 닌자 캐릭터 PFP 컬렉션으로, 자유로운 2차 창작을 허용해 다양한 파생 프로젝트가 탄생한 CryptoNinja IP의 원형입니다.',
              img: '/images/CryptoNinja.webp',
              link: 'https://magiceden.io/collections/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e%3Aopensea-crypto-ninja-nft',
            },
            {
              title: 'CryptoNinja Sakuya',
              desc: "NFT 프로젝트 'CryptoNinja'를 원작으로 한 TV 애니메이션 『숨지 않는! 크립토 닌자 사쿠야』는 2023년 10월 첫 방영을 시작했으며 2025년 시즌 3 제작이 발표된 화제작입니다.",
              img: '/images/CNSakuya.jpg',
              link: 'https://cryptoninja-sakuya.xyz/',
            },
            {
              title: 'CryptoNinja Nouns',
              desc: 'NounsDAO와의 컬래버로 태어난 555개 한정 「Nounified」 닌자 NFT. 경매 수익은 DAO를 통해 커뮤니티 발전과 사회 환원에 활용됩니다.',
              img: '/images/cryptoninja-nouns.webp',
              link: 'https://cnn.mad-member-tools.com/',
            },
            {
              title: 'CryptoNinja Ordinals (CNO)',
              desc: '비트코인 Ordinals 기반의 CryptoNinja NFT로, 2023년 7월 그랜드 세일 500체를 완판하며 Magic Eden BTC NFT 거래량 1위를 달성했습니다. 보유자에게는 향후 신작·한정판 우선 구매 등 특전이 제공되며, 최종 공급량은 2,222체로 예정되어 있습니다.',
              img: '/images/cno.jpg',
              link: 'https://magiceden.io/ordinals/marketplace/cno',
            },
            {
              title: 'CryptoNinja Mobile',
              desc: '월 사용 요금의 10%를 토큰으로 돌려받을 수 있는 저가형 MVNO 통신 서비스로, eSIM·실물 SIM 모두 지원하며 다양한 캠페인 혜택을 제공합니다.',
              img: '/images/cnmobile.png',
              link: 'https://cryptoninja-mobile.com/',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-secondary-600 hover:bg-secondary-700 text-white text-sm font-medium px-5 py-2 rounded-full transition"
                  >
                    공식 링크 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
