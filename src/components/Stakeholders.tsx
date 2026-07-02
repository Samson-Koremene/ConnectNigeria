/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Building2, 
  Lightbulb, 
  Users2, 
  Handshake, 
  Scale, 
  HeartHandshake 
} from 'lucide-react';

export default function Stakeholders() {
  const groups = [
    { name: 'Government', icon: Building2, desc: 'Federal and State executive bodies providing policy documentation.' },
    { name: 'Public Institutions', icon: Scale, desc: 'Agencies and parastatals showcasing institutional reforms.' },
    { name: 'Corporate Sector', icon: Lightbulb, desc: 'Private organizations contributing to national innovation.' },
    { name: 'Development Partners', icon: Handshake, desc: 'International bodies supporting sustainable initiatives.' },
    { name: 'Civil Society', icon: Users2, desc: 'NGOs and advocacy groups ensuring accountability.' },
    { name: 'Active Citizens', icon: HeartHandshake, desc: 'Everyday Nigerians documenting local development.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Ecosystem</h2>
          <h3 className="text-4xl font-extrabold text-[#1A2E26] mb-6">Key Stakeholders</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Collaboration is at the heart of CNFP. We work with a diverse group of partners to ensure every story is accurate and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl border border-slate-100 bg-[#F8FAF9]/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#008751] group-hover:text-white transition-colors">
                <group.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-[#1A2E26] mb-3">{group.name}</h4>
              <p className="text-slate-600 leading-relaxed">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
