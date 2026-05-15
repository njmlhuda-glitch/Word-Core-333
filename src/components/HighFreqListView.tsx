import React from 'react';
import { HIGH_FREQ_TESTS } from '@/data/vocabulary';
import { motion } from 'motion/react';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { WeakZone } from './WeakZone';

interface HighFreqListViewProps {
  onSelectTest: (testId: number) => void;
}

export default function HighFreqListView({ onSelectTest }: HighFreqListViewProps) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">High Frequency Vocabulary</h1>
        <p className="text-gray-500 text-lg">333 essential words divided into 9 comprehensive assessment modules.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HIGH_FREQ_TESTS.map((test, idx) => (
          <motion.button
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelectTest(test.id)}
            className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <BookOpen size={20} />
                </div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Module {test.id}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
            
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={14} /> 37 Words
              </span>
            </div>

            <div className="flex items-center text-purple-600 font-bold text-sm">
              Begin Module <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        ))}
      </div>

      <WeakZone />
    </div>
  );
}
