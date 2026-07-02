/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Layout, Newspaper, ArrowRight, Command } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  category: 'Project' | 'News';
  type: string;
  link: string;
  excerpt?: string;
}

const mockResults: SearchResult[] = [
  { id: '1', title: 'Lagos-Ibadan Rail Project', category: 'Project', type: 'Infrastructure', link: '#repository' },
  { id: '2', title: 'Digital Economy Expansion', category: 'Project', type: 'Technology', link: '#repository' },
  { id: '3', title: 'Healthcare Reform Update', category: 'News', type: 'Healthcare', link: '#news' },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filteredResults = query.trim() === '' 
    ? [] 
    : mockResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      <div className="relative group flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#F8FAF9] hover:bg-white border border-slate-100 hover:border-[#008751]/30 transition-all duration-300 group shadow-sm hover:shadow-md lg:min-w-[240px]"
        >
          <Search size={16} className="text-slate-400 group-hover:text-[#008751] transition-colors" />
          <span className="hidden lg:inline text-xs font-semibold text-slate-500 group-hover:text-slate-700">Search archives...</span>
          <div className="hidden lg:flex items-center space-x-1 pl-3 border-l border-slate-200 ml-auto">
            <Command size={10} className="text-slate-300" />
            <span className="text-[10px] font-black text-slate-400">K</span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#1A2E26]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden border border-slate-100"
            >
              <div className="p-4 border-b border-slate-100 flex items-center space-x-4">
                <Search size={24} className="text-[#008751]" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search projects, news, or documents..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-lg font-medium text-[#1A2E26] placeholder:text-slate-300"
                />
                {searching && (
                  <div className="w-5 h-5 border-2 border-[#008751] border-t-transparent rounded-full animate-spin"></div>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4">
                {query.trim() === '' ? (
                  <div className="py-8 text-center">
                    <p className="text-slate-400 text-sm font-medium">Type something to search across the initiative</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {['Infrastructure', 'Digital', 'Healthcare', 'Education'].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 text-xs font-bold hover:bg-emerald-50 hover:text-[#008751] transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="space-y-2">
                    {filteredResults.map((result) => (
                      <a
                        key={result.id}
                        href={result.link}
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-start justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group"
                      >
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={'p-2 rounded-xl shrink-0 bg-blue-50 text-blue-500'}>
                            {result.category === 'Project' ? <Layout size={18} /> : <Newspaper size={18} />}
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <h4 className="font-bold text-[#1A2E26] group-hover:text-[#008751] transition-colors">
                              {result.title}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1.5">
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                                {result.category}
                              </span>
                              <span className="text-slate-200">•</span>
                              <span className="text-[10px] font-bold text-slate-400">
                                {result.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-slate-200 group-hover:text-[#008751] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <Search className="mx-auto text-slate-100 mb-4" size={48} />
                    <p className="text-slate-400 font-medium">No results found for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-bold text-slate-400 shadow-sm">ESC</div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Close</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-bold text-slate-400 shadow-sm">↵</div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Select</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Connect Nigeria First
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
