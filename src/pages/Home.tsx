/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Repository from '../components/Repository';
import DocumentationScope from '../components/DocumentationScope';
import DevelopmentStories from '../components/DevelopmentStories';
import Partnerships from '../components/Partnerships';
import Stakeholders from '../components/Stakeholders';
import News from '../components/News';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] font-sans selection:bg-emerald-100 selection:text-emerald-900 text-[#1A2E26]">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <DocumentationScope />
      
      <DevelopmentStories />
      
      <Repository />
      
      <Partnerships />
      
      <Stakeholders />
      
      <News />
      
      <FAQ />
      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-600 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Join the Journey?
              </h2>
              <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you are a government institution, a corporate partner, or an active citizen, your contribution is vital to documenting Nigeria's development story.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="w-full sm:w-auto bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all">
                  Partner with CNFP
                </button>
                <button className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all border border-emerald-500">
                  Contact Support
                </button>
              </div>
            </div>
            
            {/* Abstract decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
