/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Settings, 
  Bell, 
  Bookmark, 
  LogOut, 
  Shield, 
  ChevronRight, 
  Mail,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';

export default function UserProfile() {
  const { user, logOut, userProfile } = useAuth();
  const [savedProjects, setSavedProjects] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'users', user.uid, 'savedProjects'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSavedProjects(projects);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleNotification = async (field: string, current: boolean) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      [field]: !current,
      updatedAt: serverTimestamp()
    });
  };

  const removeProject = async (projectId: string) => {
    if (!user) return;
    await deleteDoc(doc(db, 'users', user.uid, 'savedProjects', projectId));
  };

  if (!user) return null;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Profile Header */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-50 shadow-inner">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#1A2E26] flex items-center justify-center text-white">
                    <User size={48} />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#008751] text-white p-2 rounded-full shadow-lg">
                <Shield size={16} />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-black text-[#1A2E26] uppercase tracking-tighter mb-2">
                {user.displayName || 'Initiative Contributor'}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center space-x-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase">
                  <Mail size={12} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-50 rounded-full text-xs font-bold text-[#008751] uppercase">
                  <CheckCircle2 size={12} />
                  <span>Verified Citizen</span>
                </div>
              </div>
            </div>

            <button 
              onClick={logOut}
              className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-rose-50 text-rose-600 font-bold text-sm hover:bg-rose-100 transition-colors"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 p-1.5 bg-slate-200/50 rounded-2xl w-fit">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'projects' 
              ? 'bg-white text-[#1A2E26] shadow-sm' 
              : 'text-slate-500 hover:text-[#1A2E26]'
            }`}
          >
            <Bookmark size={16} />
            <span>Saved Projects</span>
            <span className="ml-2 px-1.5 py-0.5 bg-slate-100 rounded-md text-[10px]">
              {savedProjects.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'settings' 
              ? 'bg-white text-[#1A2E26] shadow-sm' 
              : 'text-slate-500 hover:text-[#1A2E26]'
            }`}
          >
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {savedProjects.length > 0 ? (
                savedProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#008751]">
                        <Bookmark size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A2E26]">{project.projectTitle}</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                          Saved on {new Date(project.savedAt?.toDate()).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeProject(project.id)}
                      className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-slate-200">
                  <Bookmark className="mx-auto text-slate-200 mb-4" size={48} />
                  <p className="text-slate-400 font-medium italic">No saved projects yet</p>
                  <button className="mt-4 text-[#008751] font-bold text-sm hover:underline">
                    Explore Repository
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100"
            >
              <div className="max-w-2xl">
                <div className="flex items-center space-x-3 mb-8">
                  <Bell className="text-[#008751]" size={24} />
                  <h2 className="text-xl font-black text-[#1A2E26] uppercase tracking-tight">Notification Preferences</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl">
                    <div>
                      <h4 className="font-bold text-[#1A2E26]">Platform Updates</h4>
                      <p className="text-xs text-slate-500 mt-1">Get notified about new projects and institutional reforms.</p>
                    </div>
                    <button 
                      onClick={() => toggleNotification('notificationsEnabled', userProfile?.notificationsEnabled)}
                      className={`w-14 h-8 rounded-full transition-all relative ${
                        userProfile?.notificationsEnabled ? 'bg-[#008751]' : 'bg-slate-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
                        userProfile?.notificationsEnabled ? 'left-7' : 'left-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl">
                    <div>
                      <h4 className="font-bold text-[#1A2E26]">Monthly Newsletter</h4>
                      <p className="text-xs text-slate-500 mt-1">A curated digest of progress milestones delivered to your inbox.</p>
                    </div>
                    <button 
                      onClick={() => toggleNotification('newsletterSubscribed', userProfile?.newsletterSubscribed)}
                      className={`w-14 h-8 rounded-full transition-all relative ${
                        userProfile?.newsletterSubscribed ? 'bg-[#008751]' : 'bg-slate-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
                        userProfile?.newsletterSubscribed ? 'left-7' : 'left-1'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <div className="flex items-start space-x-4">
                    <Shield className="text-[#008751] shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-[#008751]">Data Privacy Notice</h4>
                      <p className="text-xs text-[#1A2E26]/70 mt-1 leading-relaxed">
                        Your profile data is strictly protected under the national digital sovereignty framework. 
                        We never share your information with third-party vendors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
