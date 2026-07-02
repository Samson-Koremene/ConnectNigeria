/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Users, Shield, Zap, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    { 
      title: 'Mission', 
      desc: 'To create a definitive record of Nigeria’s development through rigorous documentation and transparent communication.',
      icon: Target,
      color: 'bg-emerald-50 text-[#008751]'
    },
    { 
      title: 'Vision', 
      desc: 'To be the most trusted global platform for showcasing Nigeria’s journey toward sustainable institutional excellence.',
      icon: Eye,
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Core Values', 
      desc: 'Transparency, Integrity, National Pride, and Accountability in every story we tell and every project we document.',
      icon: Shield,
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">The Initiative</h2>
            <h3 className="text-4xl font-extrabold text-[#1A2E26] mb-6 leading-tight">
              Bridges the Information Gap <br />
              Between Institutions and Citizens.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              CNFP is more than just a documentation project; it is a strategic movement designed to foster trust, promote responsible leadership, and encourage informed citizen engagement. We document reforms that work, innovations that solve problems, and development that lasts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, text: 'Informed Citizens' },
                { icon: Zap, text: 'Rapid Innovation' },
                { icon: TrendingUp, text: 'Sustainable Growth' },
                { icon: Shield, text: 'Accountable Governance' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 border border-slate-100 rounded-2xl bg-[#F8FAF9]/50">
                  <item.icon size={20} className="text-[#008751]" />
                  <span className="font-bold text-[#1A2E26]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group bg-white"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2E26] mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
