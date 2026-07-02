/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Partnerships() {
  const partners = ['Vision 2030', 'GIZ', 'World Bank', 'UN Nigeria', 'NBS', 'NIPC'];

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Media & Strategic Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl font-black tracking-tighter text-[#1A2E26]"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
