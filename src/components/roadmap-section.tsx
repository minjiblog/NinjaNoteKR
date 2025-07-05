"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

export default function RoadmapSection() {
  type RoadmapItem = { date: string; title: string; description: string; completed: boolean };
  const roadmap = {
    title: "로드맵",
    items: [
      { date: "2023 Q1", title: "사이트 개설", description: "Ninja DAO 한국어 정보 허브 런칭.", completed: true },
      { date: "2023 Q3", title: "커뮤니티 파트너십", description: "국내 NFT 프로젝트와 협력 강화.", completed: true },
      { date: "2024 Q1", title: "오프라인 밋업", description: "서울 밋업 개최.", completed: false },
    ],
  } as { title: string; items: RoadmapItem[] };

  return (
    <section id="roadmap" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {roadmap.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert max-w-none mb-12">
            {/* Removed MDXContent */}
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 -ml-0.5 md:transform md:-translate-x-1/2" />

            {roadmap.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-8 md:pr-0 md:text-left"
                    : "md:mr-auto md:pr-8 md:pl-0 md:text-right"
                } pl-12 md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center ${
                    index % 2 === 0 ? "md:-ml-4" : "md:-ml-4"
                  } md:transform md:-translate-x-1/2`}
                >
                  {item.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                <div className="card">
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-brand/10 text-brand rounded-full">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


