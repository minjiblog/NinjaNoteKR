"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { allNinjaDaos } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Palette, BookOpen, Users } from "lucide-react";

const iconComponents = {
  Palette,
  BookOpen,
  Users,
};

export default function NinjaDaoSection() {
  const ninjaDao = allNinjaDaos[0];
  const MDXContent = useMDXComponent(ninjaDao.body.code);

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
              <MDXContent />
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


