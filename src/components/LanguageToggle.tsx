/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'EN', name: 'English', native: 'English' },
  { code: 'HA', name: 'Hausa', native: 'Harshen Hausa' },
  { code: 'IG', name: 'Igbo', native: 'Asụsụ Igbo' },
  { code: 'YO', name: 'Yoruba', native: 'Èdè Yorùbá' },
];

interface LanguageToggleProps {
  scrolled?: boolean;
}

export default function LanguageToggle({ scrolled = false }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-all group ${
          scrolled 
            ? 'border-slate-200 bg-white hover:border-[#008751] hover:bg-emerald-50/30'
            : 'border-white/20 bg-white/10 hover:border-white hover:bg-white/20'
        }`}
      >
        <Globe size={16} className={`transition-colors ${
          scrolled 
            ? 'text-slate-400 group-hover:text-[#008751]'
            : 'text-white/80 group-hover:text-white'
        }`} />
        <span className={`text-xs font-extrabold ${scrolled ? 'text-[#1A2E26]' : 'text-white'}`}>
          {selectedLang.code}
        </span>
        <ChevronDown 
          size={14} 
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''} ${
            scrolled ? 'text-slate-400' : 'text-white/80'
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-black/5 border border-slate-100 z-20 overflow-hidden"
            >
              <div className="p-2 space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                      selectedLang.code === lang.code 
                      ? 'bg-emerald-50 text-[#008751]' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1A2E26]'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 leading-none mb-1">
                        {lang.name}
                      </p>
                      <p className="text-sm font-bold">{lang.native}</p>
                    </div>
                    {selectedLang.code === lang.code && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#008751]" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
