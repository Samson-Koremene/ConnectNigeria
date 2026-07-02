/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24 bg-white">
      {/* Nigerian Flag Inspired Background */}
      <div className="absolute inset-0 z-0">
        {/* Three vertical stripes - Nigerian flag style */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 bg-[#008751] opacity-5" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-[#008751] opacity-5" />
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008751' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Main Content - Official Document Style */}
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
                <span className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#008751] to-[#005A34] text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg border-2 border-[#B8860B]/30">
                  <BadgeCheck size={16} />
                  <span>Federal Republic of Nigeria</span>
                </span>
              </motion.div>

              {/* Main Headline - Serif Font for Official Feel */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="tracking-tight leading-[1.1]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                <span className="block text-[#1A2E26] mb-2 sm:mb-3 lg:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  Connect Nigeria
                </span>
                <span className="block text-[#008751] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
                  First Project
                </span>
              </motion.h1>

              {/* Official Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1A2E26] font-semibold uppercase tracking-wider max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                National Development Documentation Initiative
              </motion.p>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8 pt-2"
              >
                A credible national platform dedicated to showcasing institutional excellence, 
                strategic reforms, and documenting Nigeria's development journey.
              </motion.p>

              {/* CTA Buttons - More Official Style */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 pt-4 sm:pt-6 lg:pt-8"
              >
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] bg-[#008751] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#007043] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg border-b-4 border-[#005A34]">
                  <span>Explore Repository</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] bg-white text-[#008751] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-sm sm:text-base uppercase tracking-wider border-2 border-[#008751] hover:bg-[#008751] hover:text-white transition-all duration-300 shadow-lg">
                  Transparency Report
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Section - More Official/Data-Driven Look */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 lg:pt-16 border-t-2 border-[#B8860B]/30"
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
                    className="text-center bg-white rounded-lg p-4 sm:p-5 lg:p-6 border-2 border-slate-200 hover:border-[#008751] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#008751] mb-1 sm:mb-2 font-mono">
                      {stat.val}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-600 font-bold uppercase tracking-wider leading-tight">
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
