/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  BarChart3, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  MoreVertical,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/images/logo_official_1782844342793.jpg';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { label: 'Total Projects', value: '1,284', change: '+12%', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Media Assets', value: '4,592', change: '+25%', icon: ImageIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Reports Filed', value: '842', change: '+5%', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pending Verification', value: '12', change: '-2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const recentProjects = [
    { id: 'PROJ-001', title: 'Lagos-Ibadan Rail Project', author: 'Ministry of Transport', status: 'Verified', date: 'Oct 12, 2023' },
    { id: 'PROJ-002', title: 'Solar Power Grid Expansion', author: 'REA Nigeria', status: 'Pending', date: 'Oct 14, 2023' },
    { id: 'PROJ-003', title: 'Digital ID Enrollment', author: 'NIMC', status: 'Verified', date: 'Oct 15, 2023' },
    { id: 'PROJ-004', title: 'Agricultural Grant Phase II', author: 'Min. of Agriculture', status: 'In Review', date: 'Oct 18, 2023' },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAF9] font-sans text-[#1A2E26] overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:relative inset-y-0 left-0 w-64 bg-[#1A2E26] text-white flex flex-col h-full shrink-0 z-50 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Connect Nigeria First Project Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <div>
              <h1 className="text-sm font-black tracking-tighter text-white leading-none uppercase">Connect Nigeria</h1>
              <p className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest mt-0.5">First Project</p>
            </div>
          </div>
          <button className="lg:hidden text-emerald-100/60" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {[
            { name: 'Overview', icon: LayoutDashboard },
            { name: 'Projects', icon: FileText },
            { name: 'Media Center', icon: ImageIcon },
            { name: 'Analytics', icon: BarChart3 },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === item.name 
                ? 'bg-[#008751] text-white shadow-lg shadow-[#008751]/20' 
                : 'text-emerald-100/60 hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-400/10 transition-all">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 text-slate-600 hover:text-[#008751] transition-colors" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden sm:flex items-center bg-[#F8FAF9] px-4 py-2 rounded-xl border border-slate-100 w-64 xl:w-96">
              <Search size={18} className="text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search administration..." 
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>
            <button className="sm:hidden p-2 text-slate-600">
              <Search size={22} />
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-slate-400 hover:text-[#008751] transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center space-x-3 pl-6 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Super Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#008751] flex items-center justify-center text-white font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1A2E26]">{activeTab} Dashboard</h2>
              <p className="text-slate-500 text-xs md:text-sm">Welcome back, here's what's happening today.</p>
            </div>
            <button className="w-full sm:w-auto bg-[#008751] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#008751]/20 flex items-center justify-center space-x-2 hover:bg-[#007043] transition-all">
              <Plus size={18} />
              <span>Create New Record</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-extrabold text-[#1A2E26]">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table Area */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h4 className="font-extrabold text-[#1A2E26]">Recent Project Entries</h4>
                <button className="text-[#008751] text-xs font-bold hover:underline">View Database</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#F8FAF9] text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                      <th className="px-6 py-4">Project ID</th>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Organization</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-[#F8FAF9] transition-colors group">
                        <td className="px-6 py-4 text-xs font-mono text-slate-400">{project.id}</td>
                        <td className="px-6 py-4 font-bold text-sm text-[#1A2E26]">{project.title}</td>
                        <td className="px-6 py-4 text-xs text-slate-500 font-medium">{project.author}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                            project.status === 'Verified' ? 'bg-emerald-50 text-[#008751]' : 
                            project.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 
                            'bg-blue-50 text-blue-600'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-slate-300 hover:text-[#1A2E26] transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions / Activity */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h4 className="font-extrabold text-[#1A2E26] mb-6">Recent Activity</h4>
                <div className="space-y-6">
                  {[
                    { text: 'New documentation uploaded for Lagos rail', time: '2 mins ago', icon: CheckCircle2, color: 'text-emerald-500' },
                    { text: 'Verification request from Delta State Gov', time: '1 hour ago', icon: Clock, color: 'text-amber-500' },
                    { text: 'System backup completed successfully', time: '4 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
                    { text: 'Unusual login attempt from IP: 192.168.1.1', time: 'Yesterday', icon: AlertCircle, color: 'text-red-500' },
                  ].map((activity, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className={`mt-1 ${activity.color}`}>
                        <activity.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1A2E26] leading-snug">{activity.text}</p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A2E26] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Internal Guidelines</h4>
                  <p className="text-emerald-100/50 text-xs mb-6 leading-relaxed">
                    Please ensure all documentation follows the National Data Verification Standard 2024.
                  </p>
                  <button className="w-full py-3 bg-white text-[#1A2E26] font-bold rounded-xl text-xs hover:bg-emerald-50 transition-all">
                    Download Handbook
                  </button>
                </div>
                <BarChart3 className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
