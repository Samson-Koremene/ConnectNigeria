/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

import heroImg from '../assets/images/Hero-img.jpg';

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          {/* Nigerian Flag Inspired Overlay - Less Heavy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E26]/85 via-[#1A2E26]/75 to-[#1A2E26]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#008751]/10 via-transparent to-[#1A2E26]/70" />
          
          {/* Subtle Nigerian flag stripe pattern */}
          <div className="absolute inset-0 flex opacity-10">
            <div className="w-1/3 bg-[#008751]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#008751]" />
          </div>
        </div>
      </div>

      {/* Main Content - Official Government Style with Image */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {/* Official Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <span className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#008751] text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] shadow-xl border-2 border-[#B8860B]/40">
                  <BadgeCheck size={18} className="hidden sm:inline" />
                  <span>Federal Republic of Nigeria</span>
                </span>
              </motion.div>

              {/* Main Headline - Beautiful Serif Font */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span className="block text-white drop-shadow-2xl mb-3 sm:mb-4 lg:mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  Connect Nigeria
                </span>
                <span className="block text-[#B8860B] drop-shadow-[0_4px_20px_rgba(184,134,11,0.5)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black" style={{ textShadow: '0 0 40px rgba(184, 134, 11, 0.3), 0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                  First Project
                </span>
              </motion.h1>

              {/* Official Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-md">
                  <p className="text-xs sm:text-sm md:text-base text-white font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                    National Development Documentation Initiative
                  </p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-6 lg:px-8 pt-2"
              >
                A credible national platform dedicated to showcasing institutional excellence, 
                strategic reforms, and documenting Nigeria's development journey for future generations.
              </motion.p>

              {/* CTA Buttons - Official Style */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 pt-4 sm:pt-6 lg:pt-8"
              >
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] bg-[#008751] text-white px-8 py-4 rounded-md font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#007043] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl border-b-4 border-[#005A34] hover:translate-y-[-2px]">
                  <span>Explore Repository</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-md font-bold text-sm sm:text-base uppercase tracking-wider border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 shadow-xl">
                  Transparency Report
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Section - Official Data Display */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 lg:pt-16 border-t-2 border-[#B8860B]/40"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: 'Projects Documented', val: '2,547' },
                  { label: 'Institutional Partners', val: '127' },
                  { label: 'Citizens Reached', val: '15M+' },
                  { label: 'Annual Reports', val: '156' },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (idx * 0.1), duration: 0.5 }}
                    className="text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 sm:p-6 border-2 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#008751] mb-2 font-mono drop-shadow-sm">
                      {stat.val}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-700 font-bold uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
