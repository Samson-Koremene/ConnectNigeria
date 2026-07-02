/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  FileText, 
  Map, 
  Camera, 
  BarChart3, 
  Building2, 
  Network, 
  Archive, 
  BadgeCheck, 
  Megaphone, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y, size = 48 }: { icon: any, delay: number, x: string, y: string, size?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{ 
      duration: 5 + Math.random() * 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
  >
    <Icon size={size} className="text-emerald-600/30" />
  </motion.div>
);

import heroImg from '../assets/images/Hero-img.jpg';

export default function Hero() {
  const icons = [
    { icon: Map, x: '10%', y: '20%', delay: 0 },
    { icon: FileText, x: '80%', y: '15%', delay: 1 },
    { icon: Camera, x: '15%', y: '70%', delay: 2 },
    { icon: BarChart3, x: '85%', y: '75%', delay: 3 },
    { icon: Building2, x: '50%', y: '10%', delay: 4 },
    { icon: Network, x: '70%', y: '40%', delay: 1.5 },
    { icon: Archive, x: '25%', y: '45%', delay: 2.5 },
    { icon: BadgeCheck, x: '75%', y: '60%', delay: 0.5 },
    { icon: Megaphone, x: '40%', y: '80%', delay: 3.5 },
    { icon: Lightbulb, x: '10%', y: '40%', delay: 4.5 },
  ];

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
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E26]/95 via-[#1A2E26]/90 to-[#1A2E26]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E26]/20 via-transparent to-[#1A2E26]/60" />
        </div>
      </div>

      {/* Animated Floating Icons (subtle on top of image) */}
      <div className="absolute inset-0 z-0 opacity-10 hidden lg:block">
        {icons.map((item, idx) => (
          <FloatingIcon key={idx} icon={item.icon} x={item.x} y={item.y} delay={item.delay} />
        ))}
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <span className="inline-flex px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-[#008751] text-white rounded-full text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-2xl">
                  National Development Documentation Initiative
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="block text-white drop-shadow-2xl mb-2 sm:mb-3 lg:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  Documenting Nigeria's
                </span>
                <span className="block text-[#00ff88] drop-shadow-[0_0_40px_rgba(0,255,136,0.4)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  Development Journey
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-6 lg:px-8"
              >
                A credible national platform dedicated to showcasing institutional excellence, 
                strategic reforms, and the future of Nigerian innovation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 pt-2 sm:pt-3 lg:pt-4"
              >
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] lg:min-w-[260px] bg-[#008751] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-[#007043] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-2xl shadow-[#008751]/40 group">
                  <span>Explore Repository</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] lg:min-w-[260px] bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-xl">
                  Transparency Report
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-white/20"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                {[
                  { label: 'Projects Documented', val: '2.5k+' },
                  { label: 'Institutional Partners', val: '120+' },
                  { label: 'Citizens Reached', val: '15M+' },
                  { label: 'Annual Reports', val: '150+' },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (idx * 0.1), duration: 0.5 }}
                    className="text-center backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-1 sm:mb-2 drop-shadow-lg">
                      {stat.val}
                    </p>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-white/80 font-semibold uppercase tracking-wider leading-tight">
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
