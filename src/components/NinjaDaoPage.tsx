"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NinjaDaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-b from-primary-300 to-primary-500 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ninja&nbsp;DAO
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            28,000+ 회원이 활동 중인 일본 최대 Web3 커뮤니티
          </motion.p>
          <motion.a
            href="https://discord.gg/ninjadao"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord 참여하기 →
          </motion.a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ninja DAO란?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Ninja DAO는 2021년 9월 시작된 일본 최대 규모의 NFT 커뮤니티로, NFT&nbsp;프로젝트 ‘CryptoNinja’에서 출발해 2차 창작과 사업화를 적극 지원하며 빠르게 성장했습니다. 현재 Discord 참여 인원은 5만 명 이상이며, 누구나 자유롭게 아이디어를 제안하고 프로젝트를 추진할 수 있는 열린 환경을 지향합니다.
            </p>
          </div>
          <img
            src="/images/ninjadao.png"
            alt="Ninja DAO 소개 이미지"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Ninja DAO 핵심 행동 지침</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside">
            <li><span className="font-medium text-primary-600 dark:text-primary-400">즐겁게</span> – 커뮤니티 활동은 재미를 기반으로 합니다.</li>
            <li><span className="font-medium text-primary-600 dark:text-primary-400">친절하게</span> – 신규 참여자에게 상냥하게 정보를 제공하고 돕습니다.</li>
            <li><span className="font-medium text-primary-600 dark:text-primary-400">자유롭게 창작</span> – CryptoNinja IP는 상업적 이용까지 허용되며, 누구나 2차 창작물을 만들 수 있습니다.</li>
          </ul>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: '2차 창작 장려', icon: '🎨', desc: 'IP를 자유롭게 활용할 수 있어 팬들이 자발적으로 굿즈·게임·콘텐츠를 제작합니다.' },
            { title: '이케하야의 리더십', icon: '🧑‍🚀', desc: '공동 창립자 이케하야가 비전을 제시하며 커뮤니티 신뢰를 구축했습니다.' },
            { title: 'DAO 거버넌스', icon: '🤝', desc: '제안·투표 시스템을 통해 누구나 프로젝트를 시작하고 참여할 수 있습니다.' },
          ].map(({ title, icon, desc }) => (
            <div key={title} className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow">
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 bg-primary-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ninja DAO에 참여해 보세요!</h3>
        <p className="mb-6 text-sm max-w-xl mx-auto">Discord 서버에서 아이디어를 공유하고 다양한 프로젝트에 기여할 수 있습니다. 한국어 전용 채널도 준비되어 있으니 부담 없이 참여해 보세요.</p>
        <a href="https://discord.gg/ninjadao" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Discord 참여하기 →</a>
      </section>
    </>
  );
}
