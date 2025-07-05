"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allFAQs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faq = allFAQs[0];
  const MDXContent = useMDXComponent(faq.body.code);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {faq.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert max-w-none mb-8">
            <MDXContent />
          </div>

          <div className="space-y-4">
            {faq.questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left py-2"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


