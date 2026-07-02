/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Calendar, Filter } from 'lucide-react';

export default function DevelopmentStories() {
  const [selectedCategory, setSelectedCategory] = useState('All Sectors');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const stories = [
    {
      title: 'Lagos-Ibadan Rail Modernization',
      category: 'Infrastructure',
      location: 'South West',
      date: 'Completed 2024',
      image: 'https://images.unsplash.com/photo-1474487022152-b619b8124275?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'National Digital Identity Rollout',
      category: 'Governance',
      location: 'National',
      date: 'Active Rollout',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Universal Health Coverage Reform',
      category: 'Healthcare',
      location: 'North East',
      date: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Kano Solar Power Project',
      category: 'Energy',
      location: 'North West',
      date: 'Completed 2023',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Agricultural Transformation Fund',
      category: 'Economy',
      location: 'North Central',
      date: 'Active',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Niger Delta Bridge Initiative',
      category: 'Infrastructure',
      location: 'South South',
      date: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const categories = ['All Sectors', ...new Set(stories.map(s => s.category))];
  const regions = ['All Regions', ...new Set(stories.map(s => s.location))];

  const filteredStories = stories.filter(story => {
    const categoryMatch = selectedCategory === 'All Sectors' || story.category === selectedCategory;
    const regionMatch = selectedRegion === 'All Regions' || story.location === selectedRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <section className="py-16 lg:py-24 bg-white" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-12 gap-6">
          <div>
            <h2 className="text-[#008751] font-bold uppercase tracking-[0.3em] text-xs mb-4">Impact in Action</h2>
            <h3 className="text-4xl font-extrabold text-[#1A2E26] leading-tight">Development Stories</h3>
          </div>
          <button className="flex items-center space-x-2 text-[#008751] font-bold hover:translate-x-2 transition-transform">
            <span>View All Stories</span>
            <ArrowRight size={20} className="opacity-50" />
          </button>
        </div>

        {/* Filters UI */}
        <div className="flex flex-col space-y-6 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center space-x-2 text-slate-400 mb-2">
            <Filter size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Filter Content</span>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Sector</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#008751] text-white shadow-lg shadow-[#008751]/20' 
                        : 'bg-white text-slate-600 border border-slate-100 hover:border-[#008751]/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Region</p>
              <div className="flex flex-wrap gap-2">
                {regions.map(reg => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedRegion === reg 
                        ? 'bg-[#1A2E26] text-white shadow-lg shadow-[#1A2E26]/20' 
                        : 'bg-white text-slate-600 border border-slate-100 hover:border-[#1A2E26]/30'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredStories.map((story, idx) => (
              <motion.div
                layout
                key={story.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/5] shadow-sm hover:shadow-xl transition-shadow"
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E26]/90 via-[#1A2E26]/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                  <span className="inline-block px-3 py-1 bg-[#008751] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    {story.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-4 leading-tight">
                    {story.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-wider text-emerald-100/70">
                    <span className="flex items-center"><MapPin size={12} className="mr-1" /> {story.location}</span>
                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {story.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStories.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 font-medium">No stories found matching the selected filters.</p>
            <button 
              onClick={() => { setSelectedCategory('All Sectors'); setSelectedRegion('All Regions'); }}
              className="mt-4 text-[#008751] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

