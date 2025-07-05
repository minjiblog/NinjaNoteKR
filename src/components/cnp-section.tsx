"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { allCNPs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CNPSection() {
  const cnp = allCNPs[0];
  const MDXContent = useMDXComponent(cnp.body.code);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % cnp.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + cnp.images.length) % cnp.images.length);
  };

  return (
    <section id="cnp" className="section bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {cnp.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="prose dark:prose-invert max-w-none">
              <MDXContent />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              {cnp.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image}
                    alt={`CNP NFT Sample ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
              
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/70 dark:bg-black/70 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/70 dark:bg-black/70 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {cnp.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImage
                        ? "bg-brand"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


