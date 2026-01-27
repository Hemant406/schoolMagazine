
import React, { useState } from 'react';
import { MOCK_MAGAZINES } from '../constants';

interface MagazineReaderProps {
  magazineId: string;
  onClose: () => void;
}

const MagazineReader: React.FC<MagazineReaderProps> = ({ magazineId, onClose }) => {
  const [page, setPage] = useState(0);
  const totalPages = 12;
  const magazine = MOCK_MAGAZINES.find(m => m.id === magazineId);

  if (!magazine) return null;

  const nextSide = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevSide = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="fixed inset-0 bg-slate-950 z-[200] flex flex-col">
      {/* Navbar */}
      <div className="p-4 flex justify-between items-center text-white bg-slate-900/50 backdrop-blur-md">
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="text-center">
          <h3 className="text-sm font-bold truncate max-w-[200px]">{magazine.title}</h3>
          <p className="text-[10px] text-gray-400">{magazine.schoolName}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </button>
        </div>
      </div>

      {/* Reader Body */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden p-6">
        <div className="w-full max-w-lg aspect-[3/4] bg-white rounded shadow-2xl overflow-hidden flex flex-col transition-all duration-500 transform">
           <div className="flex-1 flex flex-col items-center justify-center p-8 text-slate-800">
             {page === 0 ? (
                <div className="w-full h-full flex flex-col animate-fadeIn">
                   <img src={magazine.thumbnail} className="w-full flex-1 object-cover rounded shadow" alt="Cover" />
                   <div className="mt-8 text-center">
                     <h1 className="text-3xl font-black mb-2 uppercase tracking-tighter italic">{magazine.title}</h1>
                     <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
                     <p className="mt-4 text-xs font-bold text-gray-500">OFFICIAL PUBLICATION • 2024</p>
                   </div>
                </div>
             ) : (
                <div className="w-full h-full space-y-6 animate-slideInRight" key={page}>
                   <div className="flex justify-between items-center text-[10px] text-gray-400 border-b pb-2">
                     <span>CHAPTER {Math.ceil(page/2)}</span>
                     <span>PAGE {page}</span>
                   </div>
                   <h2 className="text-2xl font-bold font-serif italic">The Art of Curiosity</h2>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="w-full h-32 bg-gray-100 rounded"></div>
                     <div className="w-full h-32 bg-gray-100 rounded"></div>
                   </div>
                   <p className="text-sm leading-relaxed text-gray-600 line-clamp-[12]">
                     Education is not the filling of a pail, but the lighting of a fire. Across India, students are finding new ways to express their unique perspectives. From the bustling streets of Mumbai to the serene landscapes of Kerala, creative voices are rising. This magazine aims to capture those whispers and shouts of innovation...
                   </p>
                   <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs italic text-gray-400">"Creativity takes courage." - Henri Matisse</p>
                   </div>
                </div>
             )}
           </div>
        </div>

        {/* Navigation Overlays */}
        <div 
          onClick={prevSide} 
          className="absolute left-0 top-0 bottom-0 w-24 flex items-center justify-start pl-4 cursor-pointer hover:bg-white/5 transition-colors group"
        >
          <div className="p-3 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </div>
        </div>
        <div 
          onClick={nextSide} 
          className="absolute right-0 top-0 bottom-0 w-24 flex items-center justify-end pr-4 cursor-pointer hover:bg-white/5 transition-colors group"
        >
          <div className="p-3 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>

      {/* Footer / Progress */}
      <div className="p-6 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
             <div 
              className="h-full bg-blue-500 transition-all duration-300" 
              style={{ width: `${(page / (totalPages - 1)) * 100}%` }}
             ></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <span>Progress: {Math.round((page / (totalPages - 1)) * 100)}%</span>
            <span>{page + 1} / {totalPages} Pages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineReader;
