/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Network, 
  Settings, 
  Lightbulb, 
  ShieldCheck, 
  Building, 
  FileText 
} from 'lucide-react';

export default function DocumentationScope() {
  const items = [
    { title: 'Development Achievements', desc: 'Tangible progress in infrastructure, health, and education.', icon: Building },
    { title: 'Policy Reforms', desc: 'Legislative and executive changes that drive systemic progress.', icon: Settings },
    { title: 'Innovation Ecosystem', desc: 'Breakthroughs in technology and homegrown solutions.', icon: Lightbulb },
    { title: 'Institutional Excellence', desc: 'Exemplary performance within public and private bodies.', icon: ShieldCheck },
    { title: 'Stakeholder Contributions', desc: 'The impact of local and international development partners.', icon: Network },
    { title: 'Preserved History', desc: 'Archiving national progress for future reference and study.', icon: FileText },
  ];

  return (
    <section id="documentation" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Core Focus</h2>
          <h3 className="text-4xl font-extrabold text-[#1A2E26] mb-6">What We Document</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We cover a broad spectrum of development documentation to ensure no progress goes unnoticed or forgotten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#008751]/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#008751]/5 text-[#008751] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#008751] group-hover:text-white transition-all duration-300">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A2E26] mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
