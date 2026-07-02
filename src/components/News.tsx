/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function News() {
  const articles = [
    {
      title: 'Annual Development Report 2025: A Year of Resilience',
      date: 'June 15, 2026',
      tag: 'Publication',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'CNFP Partners with Tech Hubs for Digital Documentation',
      date: 'June 10, 2026',
      tag: 'News',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Infrastructure Reform: Documenting the Bridge to 2030',
      date: 'June 02, 2026',
      tag: 'Report',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="news" className="py-24 bg-[#F8FAF9]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Insights & Updates</h2>
            <h3 className="text-4xl font-extrabold text-[#1A2E26] leading-tight">News and Publications</h3>
          </div>
          <button className="flex items-center space-x-2 text-[#1A2E26] font-bold hover:text-[#008751] transition-colors group">
            <span>Visit Media Center</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform opacity-50" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-3xl shadow-sm border border-slate-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-[#008751] uppercase tracking-widest">
                    {article.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">
                <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {article.date}</span>
              </div>
              <h4 className="text-xl font-bold text-[#1A2E26] leading-tight group-hover:text-[#008751] transition-colors">
                {article.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
