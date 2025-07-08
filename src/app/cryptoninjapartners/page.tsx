"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CryptoNinjaPartnersPage() {
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
            CryptoNinja&nbsp;Partners
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            대중적 PFP NFT 프로젝트 &amp; 2차 창작 허브
          </motion.p>
          <motion.a
            href="https://cnptcg.monolithos.co.jp/"
            className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 사이트 →
          </motion.a>
        </div>
      </section>

      {/* Project Sets */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-16">
          {[
            {
              title: 'CryptoNinja Partners (CNP)',
              desc: '22,222개의 닌자 캐릭터로 구성된 메인 PFP NFT 컬렉션으로, 자유로운 2차 창작과 수많은 파생 프로젝트의 기반이 되는 CNP IP입니다.',
              img: '/images/cnp.jpg',
              link: 'https://magiceden.io/collections/ethereum/0x138a5c693279b6cd82f48d4bef563251bc15adce',
            },
            {
              title: 'CNP TCG',
              desc: '모노리스가 전개하는 CNP IP 기반 트레이딩 카드 게임. 스마트폰 NFC 판독으로 진품·레어리티를 증명하는 “희소성 증명 트레카”가 특징이며, 인기 카드 게임 디렉터 중澤光博氏가 기획·감수를 담당합니다.',
              img: '/images/cnptcg.webp',
              link: 'https://cnptcg.monolithos.co.jp/',
            },
            {
              title: 'CNP Land',
              desc: 'The Sandbox 메타버스 내 3×3 블록 규모의 CNP 공식 월드로, 천계·4대 클랜 지역 등 복셀 아트로 꾸며진 공간에서 미션과 커뮤니티 교류를 즐길 수 있습니다.',
              img: '/images/cnpland.jpg',
              link: 'https://www.cnpland.com/',
            },
            {
              title: 'CNP Credit Card',
              desc: '에포스 카드와 제휴한 CNP 디자인 신용카드로, 사용 금액에 따라 포인트가 적립되며 출시 기념 한정 굿즈·혜택이 제공됩니다.',
              img: '/images/cnpcreka.webp',
              link: 'https://www.eposcard.co.jp/gecard/financie/cryptoninja/index.html',
            },
            {
              title: 'Digital Jokamachi',
              desc: '전국 성과 지역 활성을 목표로 발행되는 10,000개 한정 NFT “디지털 성하 시민증”. 전용 앱을 통해 200개 성 방문 기록, 성활 공유, 전용 SNS 등 다양한 기능을 제공하며, NFT 그림 변경·특전도 준비됩니다.',
              img: '/images/digitaljokers.webp',
              link: 'https://www.jkrs.jp/',
            },
            {
              title: 'CNP Friends',
              desc: 'CNP 홀더 인증, 만보기·포인트 적립, 커뮤니티 기능을 제공하는 공식 모바일 애플리케이션으로 iOS·Android에서 이용 가능합니다.',
              img: '/images/cnpfriends.webp',
              link: 'https://apps.apple.com/jp/app/cnp-friends/id1640085877',
            },
            {
              title: 'CNP Owners',
              desc: '가맹 매장에서 식사·쇼핑 등 다양한 혜택을 받을 수 있는 CNP 홀더 전용 멤버십 플랫폼입니다.',
              img: '/images/cnpowners.jpg',
              link: 'https://www.cnpowners.jp/',
            },
            {
              title: 'Furusato CNP',
              desc: '일본 ‘후루사토 납세’ 제도를 활용해 각 지방자치단체를 응원할 수 있는 NFT 프로젝트로, 지역 특산품 홍보와 세제 혜택을 동시에 제공합니다.',
              img: '/images/furusato.webp',
              link: 'https://furu.alyawmu.com/',
            },
            {
              title: 'Sozaiya-CNP',
              desc: 'CNP 일러스트를 누구나 무료로 다운로드·활용할 수 있게 한 공식 이미지 소재 사이트입니다.',
              img: '/images/sozaiya.webp',
              link: 'https://www.sozaiya.cryptoninja-partners.xyz/',
            },
            {
              title: 'CNP BurNin’ Wars',
              desc: '버닌 캐릭터들이 등장하는 라인 디펜스 형식의 무료 모바일 게임으로, 2023년 7월 App Store에서 출시되었습니다.',
              img: '/images/cnpburnin.jpg',
              link: 'https://www.cryptoninja-partners.xyz/burninwars',
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
              <div className="md:w-1/2 text-center md:text-left">
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
