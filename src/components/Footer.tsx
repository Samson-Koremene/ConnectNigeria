/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';

import logo from '../assets/images/logo_official_1782844342793.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2E26] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Connect Nigeria First Project Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <div>
                <h2 className="text-lg font-black tracking-tighter text-white leading-none uppercase">Connect Nigeria</h2>
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em] mt-0.5">First Project</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-8 text-emerald-100/50 uppercase tracking-wider font-bold">
              PRESERVING PROGRESS FOR FUTURE GENERATIONS.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#008751] hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Initiative</h4>
            <ul className="space-y-4 text-xs font-medium text-emerald-100/60">
              <li><a href="#" className="hover:text-[#008751] transition-colors">About CNFP</a></li>
              <li><a href="#" className="hover:text-[#008751] transition-colors">Documentation Scope</a></li>
              <li><a href="#" className="hover:text-[#008751] transition-colors">Verification Process</a></li>
              <li><a href="/admin" className="hover:text-[#008751] transition-colors">Admin Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Repository</h4>
            <ul className="space-y-4 text-xs font-medium text-emerald-100/60">
              <li><a href="#" className="hover:text-[#008751] transition-colors">Featured Projects</a></li>
              <li><a href="#" className="hover:text-[#008751] transition-colors">Impact Statistics</a></li>
              <li><a href="#" className="hover:text-[#008751] transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-[#008751] transition-colors">Public Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-xs font-medium text-emerald-100/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#008751] shrink-0" />
                <span>Abuja, Federal Capital Territory, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#008751] shrink-0" />
                <span>+234 (0) 800 CONNECT</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#008751] shrink-0" />
                <span>info@cnfp.gov.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-emerald-100/30 uppercase tracking-[0.2em]">
          <p>© {currentYear} CONNECT NIGERIA FIRST PROJECT. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <span className="text-[#008751]">VERIFIED CIVIC PLATFORM</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
