/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, ShieldCheck, User as UserIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LanguageToggle from './LanguageToggle';
import GlobalSearch from './GlobalSearch';

import logo from '../assets/images/logo_official_1782844342793.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Documentation', href: '#documentation' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Repository', href: '#repository' },
    { name: 'News', href: '#news' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-[#008751]/10' 
        : 'bg-[#1A2E26]/30 backdrop-blur-sm py-6 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img src={logo} alt="Connect Nigeria First Project Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-lg" referrerPolicy="no-referrer" />
            <div className="hidden xs:block">
              <h1 className={`text-base md:text-lg font-black tracking-tighter leading-none uppercase transition-colors ${
                scrolled ? 'text-[#1A2E26]' : 'text-white'
              }`}>
                Connect Nigeria
              </h1>
              <p className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 transition-colors ${
                scrolled ? 'text-[#008751]' : 'text-[#00ff88]'
              }`}>
                First Project
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <div className="flex items-center space-x-4 lg:space-x-6">
            {navLinks.slice(0, 4).map((link, idx) => (
              link.href.startsWith('#') ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-sm font-semibold transition-colors relative group ${
                    scrolled 
                      ? 'text-[#1A2E26] hover:text-[#008751]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    scrolled ? 'bg-[#008751]' : 'bg-[#00ff88]'
                  }`} />
                </motion.a>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold transition-colors relative group ${
                      scrolled 
                        ? 'text-[#1A2E26] hover:text-[#008751]' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                      scrolled ? 'bg-[#008751]' : 'bg-[#00ff88]'
                    }`} />
                  </Link>
                </motion.div>
              )
            ))}
          </div>
          
          <div className={`flex items-center space-x-4 pl-4 border-l transition-colors ${
            scrolled ? 'border-slate-200' : 'border-white/20'
          }`}>
            <GlobalSearch scrolled={scrolled} />
            <div className="hidden xl:flex items-center space-x-4">
              <LanguageToggle scrolled={scrolled} />
              
              {user ? (
                <Link 
                  to="/profile" 
                  className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all border-2 ${
                    scrolled 
                      ? 'bg-emerald-50 border-[#008751]/20 hover:border-[#008751]'
                      : 'bg-white/10 border-white/30 hover:border-white'
                  }`}
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <UserIcon size={18} className={scrolled ? 'text-[#008751]' : 'text-white'} />
                  )}
                </Link>
              ) : (
                <button 
                  onClick={signIn}
                  className={`text-xs lg:text-sm font-bold transition-colors ${
                    scrolled 
                      ? 'text-[#1A2E26] hover:text-[#008751]'
                      : 'text-white hover:text-[#00ff88]'
                  }`}
                >
                  Sign In
                </button>
              )}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#008751] text-white px-4 lg:px-6 py-2.5 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#007043] hover:scale-105 transition-all flex items-center space-x-2 shadow-lg shadow-[#008751]/30 whitespace-nowrap"
              >
                <span>Contact</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <GlobalSearch scrolled={scrolled} />
          <LanguageToggle scrolled={scrolled} />
          <button className={`ml-1 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button className="bg-[#008751] text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-[#008751]/20">
              Contact Initiative
            </button>
            
            {!user && (
              <button 
                onClick={() => {
                  signIn();
                  setIsOpen(false);
                }}
                className="w-full py-4 text-center font-bold text-[#1A2E26] border border-slate-200 rounded-xl"
              >
                Sign In with Google
              </button>
            )}
            {user && (
              <Link 
                to="/profile" 
                className="w-full py-4 text-center font-bold text-[#008751] bg-emerald-50 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
