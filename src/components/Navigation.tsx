import React, { useState } from 'react';
import { MoreVertical, Book, Sparkles, Home, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export type ViewType = 'main' | 'high-freq-list' | 'high-freq-test' | 'elegant-words' | 'custom-test';

interface NavigationProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, params?: any) => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'main', label: 'Home', icon: Home, view: 'main' as ViewType },
    { id: 'high-freq', label: 'High Frequency (333 Words)', icon: Book, view: 'high-freq-list' as ViewType },
    { id: 'custom-test', label: 'Custom Assessment', icon: Sparkles, view: 'custom-test' as ViewType },
    { id: 'elegant', label: 'Elegant Replacements', icon: Sparkles, view: 'elegant-words' as ViewType },
  ];

  return (
    <>
      {/* Three-dot Trigger */}
      <button 
        id="nav-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-all border border-gray-100 group"
      >
        <MoreVertical size={24} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
      </button>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.view);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-2xl transition-all group",
                      currentView === item.view 
                        ? "bg-purple-50 text-purple-600" 
                        : "hover:bg-gray-50 text-gray-600"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-xl transition-colors",
                      currentView === item.view ? "bg-purple-100" : "bg-gray-100 group-hover:bg-gray-200"
                    )}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-semibold text-lg flex-1 text-left">{item.label}</span>
                    <ChevronRight size={18} className={cn(
                      "transition-transform",
                      currentView === item.view ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    )} />
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest text-center">
                  Vocabulary Master v1.0
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
