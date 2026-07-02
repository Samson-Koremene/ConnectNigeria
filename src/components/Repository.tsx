/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Database, 
  Search, 
  ArrowRight, 
  FileCheck, 
  Archive, 
  Globe,
  Bookmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Repository() {
  const { user, signIn } = useAuth();

  const categories = [
    { title: 'Institutional Reforms', count: '840', icon: FileCheck },
    { title: 'Innovation Archives', count: '420', icon: Archive },
    { title: 'Policy Documents', count: '1,200', icon: Database },
    { title: 'Global Benchmarks', count: '150', icon: Globe },
  ];

  const recentDocs = [
    { id: 'doc-1', title: 'Fiber Backbone Phase II', type: 'Infrastructure' },
    { id: 'doc-2', title: 'Digital Literacy Act 2024', type: 'Policy' },
    { id: 'doc-3', title: 'Reform Framework v1.2', type: 'Institutional' },
    { id: 'doc-4', title: 'Baure Rural Connect Initiative', type: 'Innovation' },
    { id: 'doc-5', title: 'Energy Transition Plan', type: 'Policy' },
  ];

  const saveProject = async (docData: any) => {
    if (!user) {
      signIn();
      return;
    }
    
    try {
      const saveRef = doc(db, 'users', user.uid, 'savedProjects', docData.id);
      await setDoc(saveRef, {
        projectId: docData.id,
        projectTitle: docData.title,
        savedAt: serverTimestamp()
      });
      alert('Project saved to your profile!');
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  return (
    <section id="repository" className="py-24 bg-[#1A2E26] text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008751] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#008751] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] text-[#008751]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Centralized Intelligence</h2>
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">National Repository for <br /> Development Documentation</h3>
            <p className="text-emerald-100/70 text-lg mb-10 leading-relaxed">
              Access a comprehensive, searchable, and verified database of Nigeria’s development milestones. Our repository preserves national progress for policy makers, researchers, and future generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008751]" size={20} />
                <input 
                  type="text" 
                  placeholder="Search documentation..." 
                  className="w-full pl-12 pr-4 py-4 bg-[#2A3E36]/50 border border-white/10 rounded-2xl text-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#008751]/30" 
                />
              </div>
              <button className="px-8 py-4 bg-[#008751] hover:bg-[#007043] text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#008751]/20">
                <span>Search Repository</span>
                <ArrowRight size={18} className="opacity-50" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-4 bg-[#2A3E36]/40 border border-white/5 rounded-2xl">
                  <cat.icon size={24} className="text-[#008751] mb-3" />
                  <p className="text-xl md:text-2xl font-bold mb-1">{cat.count}</p>
                  <p className="text-[9px] md:text-[10px] text-emerald-300/40 font-bold uppercase tracking-widest">{cat.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-1 shadow-2xl shadow-emerald-500/20">
              <div className="w-full h-full bg-emerald-950 rounded-[22px] overflow-hidden p-8 flex items-center justify-center border border-emerald-400/20">
                <div className="space-y-4 w-full">
                  {recentDocs.map((doc, i) => (
                    <motion.div 
                      key={doc.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="h-20 bg-emerald-900/50 border border-emerald-800 rounded-2xl flex items-center justify-between px-6 group hover:border-[#008751] transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-[#008751] group-hover:text-white transition-all">
                          <FileCheck size={20} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-emerald-50 leading-tight">{doc.title}</h4>
                          <p className="text-[10px] text-emerald-400/60 font-bold uppercase tracking-widest">{doc.type}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => saveProject(doc)}
                        className="p-2.5 rounded-xl bg-emerald-800/30 text-emerald-400 hover:bg-[#008751] hover:text-white transition-all"
                        title="Save Project"
                      >
                        <Bookmark size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
