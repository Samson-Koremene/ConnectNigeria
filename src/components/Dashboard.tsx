/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Activity, 
  CheckCircle2, 
  Clock, 
  BarChart, 
  Search, 
  Filter, 
  ArrowUpRight,
  MapPin,
  Shield
} from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    { label: 'Reform Success Rate', val: '84%', icon: Activity, trend: '+4%' },
    { label: 'Projects Verified', val: '1,240', icon: CheckCircle2, trend: '+12' },
    { label: 'Active Documentation', val: '450', icon: Clock, trend: 'Live' },
    { label: 'Public Confidence', val: '72%', icon: BarChart, trend: '+8%' },
  ];

  const projects = [
    {
      title: 'Digital Economy Expansion',
      location: 'National Coverage',
      status: 'Ongoing',
      progress: 65,
      impact: '2.5M New Jobs'
    },
    {
      title: 'Agricultural Innovation Hubs',
      location: 'North Central',
      status: 'Verified',
      progress: 100,
      impact: '30% Yield Increase'
    },
    {
      title: 'Renewable Energy Initiative',
      location: 'South West',
      status: 'Ongoing',
      progress: 42,
      impact: '500 Schools Powered'
    }
  ];

  return (
    <section id="dashboard" className="py-24 bg-[#F8FAF9] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Real-time Visibility</h2>
            <h3 className="text-4xl font-extrabold text-[#1A2E26] leading-tight">Transparency Dashboard</h3>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008751]/20" 
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Filter size={18} className="text-slate-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-50 text-[#008751] rounded-2xl">
                  <metric.icon size={24} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${metric.trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                  {metric.trend}
                </span>
              </div>
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{metric.label}</h4>
              <p className="text-3xl font-extrabold text-[#1A2E26]">{metric.val}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h4 className="font-extrabold text-[#1A2E26]">Trending Projects</h4>
              <button className="text-[#008751] text-sm font-bold flex items-center hover:underline">
                View All <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {projects.map((project, idx) => (
                <div key={idx} className="p-6 hover:bg-[#F8FAF9] transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-bold text-[#1A2E26] group-hover:text-[#008751] transition-colors">{project.title}</h5>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${project.status === 'Verified' ? 'bg-emerald-50 text-[#008751]' : 'bg-amber-50 text-amber-700'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 space-x-4">
                        <span className="flex items-center"><MapPin size={14} className="mr-1" /> {project.location}</span>
                        <span className="text-[#008751] font-bold">Impact: {project.impact}</span>
                      </div>
                    </div>
                    <div className="w-full md:w-48">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-[#008751]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A2E26] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden border-4 border-white shadow-lg">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4">Participate in Documentation</h4>
              <p className="text-emerald-100/80 mb-8 text-sm leading-relaxed">
                CNFP relies on verified institutional data and citizen reporting. Help us build a credible national repository.
              </p>
              <div className="space-y-4">
                <button className="w-full py-4 bg-white text-[#1A2E26] font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-lg">
                  Submit Project Data
                </button>
                <button className="w-full py-4 bg-[#2A3E36] text-white border border-white/10 font-bold rounded-2xl hover:bg-[#3A4E46] transition-all">
                  Apply for Verification
                </button>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-5">
              <Shield size={240} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
