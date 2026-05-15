import React, { useState, useMemo, useEffect } from 'react';
import { ELEGANT_WORDS } from '@/data/vocabulary';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RefreshCw, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ElegantWordsView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return ELEGANT_WORDS;
    const query = searchQuery.toLowerCase();
    return ELEGANT_WORDS.filter(item => 
      item.mainWord.toLowerCase().includes(query) ||
      item.insteadWords.some(word => word.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Reset index when search changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [searchQuery]);

  const current = filteredWords[currentIndex];

  const handleNext = () => {
    if (filteredWords.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
    }, 150);
  };

  const handlePrev = () => {
    if (filteredWords.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    }, 150);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 min-h-[80vh] flex flex-col">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Elevate Your Lexicon</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Transform common words into sophisticated alternatives with our immersion set. Search to find specific refinements.</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl w-full mx-auto mb-12 relative">
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-purple-500 transition-colors">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search common words or elegant alternatives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-100 py-4 pl-14 pr-12 rounded-[2rem] shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all text-lg placeholder:text-gray-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-5 flex items-center text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-2 text-center">
            <span className="text-xs font-bold text-purple-500 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest">
              {filteredWords.length} results found
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {filteredWords.length > 0 ? (
          <>
            <div className="w-full max-w-2xl perspective-[2000px] h-[450px]">
              <motion.div
                key={current.mainWord}
                className="w-full h-full relative preserve-3d cursor-pointer"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center justify-center p-12 text-center group">
                  <div className="absolute top-8 left-8 text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Common Word</div>
                  <h2 className="text-6xl font-bold text-gray-900 mb-8 tracking-tighter italic">
                    {current.mainWord}
                  </h2>
                  <div className="flex items-center gap-2 text-purple-600 font-bold bg-purple-50 px-6 py-2 rounded-full">
                    <RefreshCw size={18} /> Click to reveal elegant alternatives
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] bg-purple-600 rounded-[40px] shadow-2xl flex flex-col items-center justify-start p-10 text-center overflow-y-auto">
                  <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest mb-6 w-full text-left">Elegant Alternatives</div>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {current.insteadWords.map((word, i) => (
                      <span key={i} className="text-3xl font-bold text-white tracking-tight bg-white/10 px-4 py-1 rounded-xl">
                        {word}
                      </span>
                    ))}
                  </div>
                  
                  {current.examples.map((ex, i) => (
                    <div key={i} className="w-full space-y-4 mb-4 last:mb-0">
                      <div className="bg-white/10 rounded-2xl p-5 text-left border border-white/20">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center shrink-0 mt-1">
                            <span className="text-red-200 text-xs font-bold">W</span>
                          </div>
                          <p className="text-purple-100 font-medium leading-relaxed italic">
                            "{ex.weak}"
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-1">
                            <span className="text-green-200 text-xs font-bold">B</span>
                          </div>
                          <p className="text-white font-bold leading-relaxed italic">
                            "{ex.better}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-12">
              <button 
                onClick={handlePrev}
                disabled={filteredWords.length <= 1}
                className={cn(
                  "p-4 bg-white shadow-lg rounded-full border border-gray-100 transition-all text-gray-600 hover:text-purple-600",
                  filteredWords.length <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50 active:scale-95"
                )}
              >
                <ChevronLeft size={28} />
              </button>
              
              <div className="bg-white px-8 py-3 rounded-full border border-gray-100 shadow-sm">
                <span className="font-mono font-bold text-gray-900">{currentIndex + 1}</span>
                <span className="text-gray-300 mx-2">/</span>
                <span className="font-mono text-gray-400">{filteredWords.length}</span>
              </div>

              <button 
                onClick={handleNext}
                disabled={filteredWords.length <= 1}
                className={cn(
                  "p-4 bg-white shadow-lg rounded-full border border-gray-100 transition-all text-gray-600 hover:text-purple-600",
                  filteredWords.length <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50 active:scale-95"
                )}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No words found</h3>
            <p className="text-gray-500">We couldn't find anything matching "{searchQuery}". Try a different term.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-purple-600 font-bold hover:underline"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
