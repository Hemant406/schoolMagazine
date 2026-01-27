
import React from 'react';
import { MOCK_MAGAZINES, MOCK_SCHOOLS } from '../constants';
import { AppTab } from '../types';

interface HomeViewProps {
  onRead: (id: string) => void;
  onNavigate: (tab: AppTab) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onRead, onNavigate }) => {
  const followedMagazines = MOCK_MAGAZINES.filter(m => m.schoolId === 's1' || m.schoolId === 's2');

  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] md:rounded-[60px] bg-slate-900 text-white min-h-[400px] flex flex-col justify-center p-8 md:p-16">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" alt="Education Hero" />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="bg-indigo-600/30 backdrop-blur-md border border-indigo-400/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">National School Network</span>
          <h1 className="text-4xl md:text-6xl font-black font-montserrat leading-[1.1] tracking-tight">
            Showcase Your <span className="text-indigo-400">Creative</span> Legacy.
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-medium max-w-lg leading-relaxed">
            The ultimate platform for Indian schools to publish digital magazines, share artistic achievements, and inspire the next generation of storytellers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => onNavigate(AppTab.MAGAZINES)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Library</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
            <div 
              onClick={() => onNavigate(AppTab.SEARCH)}
              className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 flex items-center text-white/50 cursor-pointer hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5 mr-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-xs font-bold uppercase tracking-widest">Search Schools...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Magazines Section - Renamed and smaller covers */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black font-montserrat uppercase tracking-wider text-slate-900 dark:text-white">Magazines</h2>
            <div className="h-1 w-12 bg-indigo-600 mt-2"></div>
          </div>
          <button 
            onClick={() => onNavigate(AppTab.MAGAZINES)}
            className="text-indigo-500 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center"
          >
            Explore All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {MOCK_MAGAZINES.map((mag) => (
            <div 
              key={mag.id} 
              onClick={() => onRead(mag.id)}
              className="group cursor-pointer space-y-3"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-[24px] shadow-md group-hover:shadow-xl transition-all duration-500">
                <img src={mag.thumbnail} alt={mag.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                   <span className="text-white text-[8px] font-black uppercase tracking-widest bg-indigo-600 px-2 py-1 rounded-md">Read</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg text-[8px] font-black text-indigo-600 shadow-sm">
                  {mag.year}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xs leading-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors line-clamp-2">{mag.title}</h3>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight mt-1 truncate">{mag.schoolName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Following List */}
        <section className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-gray-100 dark:border-slate-800 shadow-sm">
          <h2 className="text-lg font-black font-montserrat uppercase tracking-wider mb-6 text-slate-800 dark:text-slate-200">From Your Circle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {followedMagazines.map((mag) => (
              <div 
                key={`followed-${mag.id}`}
                onClick={() => onRead(mag.id)}
                className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all cursor-pointer group"
              >
                <img src={mag.thumbnail} className="w-16 h-20 rounded-xl object-cover shadow-sm flex-shrink-0" alt={mag.title} />
                <div className="ml-4 flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">{mag.title}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase truncate mt-1">{mag.schoolName}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-400">
                      <svg className="w-3 h-3 text-rose-500 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                      <span>{mag.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discovery Card */}
        <div 
          onClick={() => onNavigate(AppTab.VIDEOS)}
          className="relative overflow-hidden rounded-[40px] bg-indigo-600 p-8 flex flex-col justify-end min-h-[300px] group cursor-pointer shadow-xl shadow-indigo-600/20"
        >
          <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" alt="workshop" />
          <div className="relative z-10">
            <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white mb-4 inline-block">Free Workshop</span>
            <h3 className="text-2xl font-black text-white leading-tight">Digital Media Masterclass</h3>
            <p className="text-indigo-100 text-xs font-medium mt-2">Join our latest session on magazine layout design.</p>
            <div className="mt-6 flex items-center text-white text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              <span>Enroll Now</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
