/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navigation, { ViewType } from './components/Navigation';
import HighFreqListView from './components/HighFreqListView';
import HighFreqTestView from './components/HighFreqTestView';
import ElegantWordsView from './components/ElegantWordsView';
import { VocabularyTestManager } from './components/test/VocabularyTestManager';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('main');
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);

  const navigate = (view: ViewType, params?: any) => {
    setCurrentView(view);
    if (params?.testId) {
      setSelectedTestId(params.testId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'high-freq-list':
        return (
          <HighFreqListView 
            onSelectTest={(id) => navigate('high-freq-test', { testId: id })} 
          />
        );
      case 'high-freq-test':
        return selectedTestId ? (
          <HighFreqTestView 
            testId={selectedTestId} 
            onBack={() => setCurrentView('high-freq-list')} 
          />
        ) : <HighFreqListView onSelectTest={(id) => navigate('high-freq-test', { testId: id })} />;
      case 'elegant-words':
        return <ElegantWordsView />;
      case 'custom-test':
        return <VocabularyTestManager />;
      case 'main':
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center p-6">
            <div className="max-w-2xl">
              <div className="w-20 h-20 bg-purple-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-200">
                <span className="text-white text-4xl font-bold">V</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">High Frequency Words</h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                Unlock higher forms of expression through targeted linguistic practice. 
                Explore independent modules via the menu in the top right.
              </p>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">333 Words</h3>
                  <p className="text-sm text-gray-400">High-frequency academic and literary vocabulary.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">100 Flashcards</h3>
                  <p className="text-sm text-gray-400">Transform your speech with elegant alternatives.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentView={currentView} onNavigate={navigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView === 'high-freq-test' ? `test-${selectedTestId}` : currentView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
