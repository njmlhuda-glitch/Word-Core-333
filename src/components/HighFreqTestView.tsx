import React, { useState } from 'react';
import { HIGH_FREQ_TESTS } from '@/data/vocabulary';
import { ArrowLeft, Book, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HighFreqTestViewProps {
  testId: number;
  onBack: () => void;
}

export default function HighFreqTestView({ testId, onBack }: HighFreqTestViewProps) {
  const test = HIGH_FREQ_TESTS.find(t => t.id === testId);
  const [selectedWord, setSelectedWord] = useState<number | null>(null);

  if (!test) return null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-bold text-sm mb-12 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Modules
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{test.title}</h1>
        <p className="text-gray-500">Comprehensive study of 37 high-frequency words for module {testId}.</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {test.words.map((w, idx) => (
          <div key={idx} className="group">
            <button
              onClick={() => setSelectedWord(selectedWord === idx ? null : idx)}
              className="w-full p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between text-left group-hover:border-purple-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 flex-1">
                <span className="text-xs font-mono font-bold text-gray-300 w-6 hidden sm:block">{(idx + 1).toString().padStart(2, '0')}</span>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-800">{w.word}</span>
                  <span className="text-sm font-mono text-purple-500 font-medium">{w.pronunciation} • {w.partOfSpeech}</span>
                </div>
                <div className="sm:ml-auto">
                  <span className="text-lg font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-xl">
                    {w.bengali}
                  </span>
                </div>
              </div>
              <div className="p-2 ml-4 rounded-lg bg-gray-50 group-hover:bg-purple-50 text-gray-400 group-hover:text-purple-600 transition-colors">
                <Info size={16} />
              </div>
            </button>
            <AnimatePresence>
              {selectedWord === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 bg-gray-50/50 rounded-b-2xl border-x border-b border-gray-100 -mt-2 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">Meaning</h4>
                      <div className="space-y-1">
                        {w.meaning.map((m, mi) => (
                          <p key={mi} className="text-gray-700 leading-relaxed text-lg font-medium">
                            {m}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">Examples</h4>
                      <div className="space-y-3">
                        {w.example.map((e, ei) => (
                          <div key={ei} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mt-2.5 shrink-0" />
                            <p className="text-gray-600 italic leading-relaxed">
                              "{e}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
