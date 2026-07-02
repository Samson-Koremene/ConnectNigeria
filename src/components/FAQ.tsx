/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the primary mission of Connect Nigeria First Project (CNFP)?",
    answer: "CNFP is a national development documentation initiative dedicated to preserving, validating, and showcasing Nigeria's institutional reforms, innovation archives, and infrastructure milestones. Our goal is to create a transparent repository of progress for future generations."
  },
  {
    question: "How does the platform validate project data?",
    answer: "We employ a multi-layered validation process involving field reports, satellite imagery (where applicable), stakeholder verification, and independent audit trails. Every entry in our repository undergoes a rigorous peer-review phase before final documentation."
  },
  {
    question: "Who can access the CNFP documentation repository?",
    answer: "The repository is designed for transparency and is accessible to government agencies, international partners, researchers, and the general public. Certain technical documentation may require institutional authorization for full access."
  },
  {
    question: "How are the development stories curated?",
    answer: "Development stories are sourced directly from the impact zones. We work with local documentarians and technical experts to capture the real-world transformation resulting from institutional reforms and infrastructure projects."
  },
  {
    question: "How can my organization partner with the CNFP initiative?",
    answer: "Organizations can partner through data sharing, technical collaboration, or documentation support. Interested stakeholders can reach out via the 'Contact Initiative' portal for formal partnership frameworks."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-emerald-900/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? 'text-[#008751]' : 'text-[#1A2E26] group-hover:text-[#008751]'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#008751] text-white' : 'bg-emerald-50 text-[#008751]'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-slate-500 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#008751] mb-4">
            <HelpCircle size={20} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A2E26] uppercase tracking-tighter">
            Common <span className="text-[#008751]">Queries</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            Everything you need to know about the platform and our documentation standards.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
