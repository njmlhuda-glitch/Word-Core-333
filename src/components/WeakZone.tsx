import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trash2, ExternalLink, Info } from 'lucide-react';
import { getWeakWords, removeFromWeakZone, clearWeakZone, WeakWord } from '../lib/weakZoneUtils';

export const WeakZone: React.FC = () => {
  const [weakWords, setWeakWords] = useState<WeakWord[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  useEffect(() => {
    setWeakWords(getWeakWords());
  }, []);

  const handleRemove = (word: string) => {
    removeFromWeakZone(word);
    setWeakWords(getWeakWords());
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your weak zone?')) {
      clearWeakZone();
      setWeakWords([]);
    }
  };

  if (weakWords.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 border-t border-gray-100 pt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <span className="text-xl">🎯</span>
            </div>
            Weak Zone
          </h2>
          <p className="text-gray-500">Words you've missed in recent tests. Practice these to improve!</p>
        </div>
        <button
          onClick={handleClear}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="Clear all"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weakWords.map((item, idx) => (
          <div key={item.word.word} className="group">
            <div
              className={`p-6 bg-white border rounded-2xl transition-all ${
                selectedWord === item.word.word ? 'border-red-200 shadow-lg' : 'border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-800">{item.word.word}</span>
                    <span className="text-xs font-mono text-red-500 font-medium">Missed {item.count} {item.count === 1 ? 'time' : 'times'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedWord(selectedWord === item.word.word ? null : item.word.word)}
                    className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Info size={16} />
                  </button>
                  <button
                    onClick={() => handleRemove(item.word.word)}
                    className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {selectedWord === item.word.word && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-gray-50"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Meaning</h4>
                        <p className="text-gray-700 font-medium">{item.word.meaning[0]}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Bengali</h4>
                        <p className="text-gray-900 font-bold">{item.word.bengali}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Example</h4>
                        <p className="text-gray-600 italic text-sm">"{item.word.example[0]}"</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
