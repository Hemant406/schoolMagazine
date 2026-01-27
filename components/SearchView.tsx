
import React, { useState } from 'react';
import { MOCK_MAGAZINES } from '../constants';

interface SearchViewProps {
  onRead: (id: string) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ onRead }) => {
  const [query, setQuery] = useState('');
  const categories = [
    { name: 'Magazines', icon: '📖' },
    { name: 'Schools', icon: '🏫' },
    { name: 'Regions', icon: '📍' },
    { name: 'People', icon: '🎓' },
  ];

  const results = MOCK_MAGAZINES.filter(m => 
    m.title.toLowerCase().includes(query.toLowerCase()) || 
    m.schoolName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-montserrat">Search</h2>
        <div className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..." 
            className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
          />
          <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      {query === '' ? (
        <section className="space-y-6">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Categories</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center space-x-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-colors">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-bold text-sm">{cat.name}</span>
              </button>
            ))}
          </div>

          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mt-8">Recent Searches</h3>
          <div className="space-y-2">
            {['Delhi Public School', 'Annual 2024', 'Climate Action'].map(s => (
              <div key={s} className="flex items-center justify-between p-3 text-gray-500 border-b border-gray-100 dark:border-slate-800">
                 <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm">{s}</span>
                 </div>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="space-y-4">
           <h3 className="text-sm font-bold text-gray-400">{results.length} results for "{query}"</h3>
           <div className="space-y-4">
              {results.map(res => (
                <div 
                  key={res.id} 
                  onClick={() => onRead(res.id)}
                  className="flex items-center space-x-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 animate-slideInRight cursor-pointer"
                >
                  <img src={res.thumbnail} className="w-16 h-20 object-cover rounded-xl shadow" alt={res.title} />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm leading-tight">{res.title}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">{res.schoolName}</p>
                    <div className="flex items-center space-x-2 mt-2">
                       <span className="text-[9px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 px-1.5 py-0.5 rounded font-bold uppercase">{res.region}</span>
                       <span className="text-[9px] text-gray-400">{res.year}</span>
                    </div>
                  </div>
                </div>
              ))}
              {results.length === 0 && (
                <div className="text-center py-20 opacity-50">
                  <p className="text-5xl mb-4">🔍</p>
                  <p className="text-sm font-bold">No magazines found.</p>
                  <p className="text-xs">Try adjusting your keywords.</p>
                </div>
              )}
           </div>
        </section>
      )}
    </div>
  );
};

export default SearchView;
