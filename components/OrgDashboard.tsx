
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface OrgDashboardProps {
  user: UserProfile;
}

const OrgDashboard: React.FC<OrgDashboardProps> = ({ user }) => {
  const [isUploading, setIsUploading] = useState(false);

  const analyticsData = [
    { name: 'Jan', views: 4000, likes: 2400 },
    { name: 'Feb', views: 3000, likes: 1398 },
    { name: 'Mar', views: 2000, likes: 9800 },
    { name: 'Apr', views: 2780, likes: 3908 },
    { name: 'May', views: 1890, likes: 4800 },
    { name: 'Jun', views: 2390, likes: 3800 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-montserrat text-slate-900 dark:text-white">Organization Command Center</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your legacy and track student engagement.</p>
        </div>
        <button 
          onClick={() => setIsUploading(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          <span>New Publication</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Summary */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-gray-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-black font-montserrat uppercase tracking-wider text-slate-800 dark:text-slate-200">Engagement Overview</h2>
            <div className="flex space-x-2">
              <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-lg">↑ 12.4%</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415511" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 'bold'}} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '20px', border: 'none', backgroundColor: '#0f172a', color: '#fff', padding: '12px' }}
                  itemStyle={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}
                />
                <Bar dataKey="views" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions / Recent Activity */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 text-white rounded-[32px] shadow-lg shadow-slate-900/20">
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2">Total Outreach</p>
            <p className="text-3xl font-black">124,500+</p>
            <p className="text-xs text-slate-400 mt-2">Active readers across 12 regions.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[32px] p-6">
             <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Manage Status</h3>
             <div className="space-y-4">
                {[
                  { title: 'Annual 2024', status: 'Live', date: '2d ago' },
                  { title: 'Winter Arts', status: 'Draft', date: 'Today' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                     <div>
                        <p className="text-xs font-bold text-slate-800 dark:text-white">{item.title}</p>
                        <p className="text-[9px] text-gray-500 font-medium uppercase tracking-tighter">{item.date}</p>
                     </div>
                     <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-md ${item.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                        {item.status}
                     </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Upload Modal (Simplified) */}
      {isUploading && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-[40px] p-8 shadow-2xl animate-scaleIn">
             <div className="flex justify-between items-center mb-8">
                <div>
                   <h3 className="text-xl font-black font-montserrat tracking-tight">Upload New Magazine</h3>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Share your school's vision</p>
                </div>
                <button onClick={() => setIsUploading(false)} className="p-2 text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             
             <div className="space-y-6">
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[32px] p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-indigo-500 transition-colors cursor-pointer group">
                   <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                   </div>
                   <div>
                      <p className="text-sm font-black text-slate-800 dark:text-slate-100">Drop your PDF here</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">PDF or high-res images</p>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Title</label>
                   <input type="text" placeholder="e.g. Science Fair 2024" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm font-bold" />
                </div>

                <button className="w-full bg-indigo-600 text-white p-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-indigo-700 transition-all">
                  Publish to Library
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgDashboard;
