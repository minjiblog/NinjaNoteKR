"use client";

import { motion } from "framer-motion";
import Image from "next/image";


import { Palette, BookOpen, Users } from "lucide-react";

const iconComponents = {
  Palette,
  BookOpen,
  Users,
};

export default function NinjaDaoSection() {
  const ninjaDao = {
    title: "Ninja DAO",
    description: "일본 최대 규모의 NFT 커뮤니티이며 창작과 학습의 허브입니다.",
    images: [
      "/images/ninja-dao/1.webp",
      "/images/ninja-dao/2.webp",
      "/images/ninja-dao/3.webp",
      "/images/ninja-dao/4.webp",
    ],
    cards: [
      { icon: "Palette", title: "크리에이터 지원", description: "창작자들이 자신의 작품을 공유하고 피드백을 받을 수 있습니다." },
      { icon: "BookOpen", title: "학습 자료", description: "NFT, 블록체인, 마케팅 등 다양한 교육 리소스를 제공합니다." },
      { icon: "Users", title: "커뮤니티", description: "17,000+ 명의 멤버가 활발히 소통합니다." },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="ninja-dao" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {ninjaDao.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{ninjaDao.description}</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {ninjaDao.images.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Ninja DAO Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {ninjaDao.cards.map((card, index) => {
            const IconComponent = iconComponents[card.icon as keyof typeof iconComponents];
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {IconComponent && (
                    <div className="mr-3 p-2 bg-brand/10 text-brand rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


