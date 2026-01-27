
import React, { useState } from 'react';
import { MOCK_MAGAZINES } from '../constants';

interface MagazinesViewProps {
  onRead: (id: string) => void;
}

const MagazinesView: React.FC<MagazinesViewProps> = ({ onRead }) => {
  const [filter, setFilter] = useState('All');
  const tabs = ['All', 'School', 'Region', 'Liked', 'Viewed'];

  return (
    <div className="space-y-6 pb-6 animate-fadeIn">
      <h2 className="text-2xl font-bold font-montserrat">Library</h2>
      
      {/* Scrollable Tabs */}
      <div className="flex overflow-x-auto gap-3 no-scrollbar py-1">
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              filter === tab 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Magazine Grid */}
      <div className="grid grid-cols-2 gap-4">
        {MOCK_MAGAZINES.map(mag => (
          <div 
            key={mag.id}
            onClick={() => onRead(mag.id)}
            className="flex flex-col space-y-3 group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-md">
              <img 
                src={mag.thumbnail} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={mag.title} 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-3 right-3">
                 <button className="bg-white/90 backdrop-blur dark:bg-slate-900/90 p-2 rounded-full shadow-lg text-blue-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                 </button>
              </div>
            </div>
            <div className="px-1">
              <h3 className="text-sm font-bold leading-tight line-clamp-2 h-10 group-hover:text-blue-500 transition-colors">{mag.title}</h3>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium truncate mt-1">{mag.schoolName}</p>
              <div className="flex items-center space-x-3 mt-2">
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                  <span className="text-[10px] font-bold">{mag.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <span className="text-[10px] font-bold">{mag.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinesView;
