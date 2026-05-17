import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TestSettings, TestMode } from "../../types/test";
import { HIGH_FREQ_TESTS } from "../../data/vocabulary";
import { Settings, Play, CheckCircle2, Clock, Hash, BookOpen } from "lucide-react";

interface Props {
  onStart: (settings: TestSettings) => void;
}

export const TestConfig: React.FC<Props> = ({ onStart }) => {
  const [selectedModules, setSelectedModules] = useState<number[]>([1]);
  const [mode, setMode] = useState<TestMode>("MCQ");
  const [wordCount, setWordCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(10);
  const [configType, setConfigType] = useState<"module" | "range">("module");
  const [range, setRange] = useState<[number, number]>([1, 9]);

  const toggleModule = (id: number) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleStart = () => {
    onStart({
      selectedModules: configType === "module" ? selectedModules : [],
      customRange: configType === "range" ? range : null,
      mode,
      wordCount,
      timeLimit,
      totalTimeLimit: 0, // Simplified for now
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Custom Test Setup</h2>
          <p className="text-gray-500">Configure your session parameters</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Selection Area */}
        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Selection Mode
            </label>
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setConfigType("module")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  configType === "module" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500"
                }`}
              >
                By Modules
              </button>
              <button
                onClick={() => setConfigType("range")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  configType === "range" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500"
                }`}
              >
                Custom Range
              </button>
            </div>
          </div>

          {configType === "module" ? (
            <div className="grid grid-cols-3 gap-2">
              {HIGH_FREQ_TESTS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => toggleModule(m.id)}
                  className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    selectedModules.includes(m.id)
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"
                  }`}
                >
                  Module {m.id}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">Start Module</label>
                  <select
                    value={range[0]}
                    onChange={(e) => {
                      const start = parseInt(e.target.value);
                      setRange([start, Math.max(start, range[1])]);
                    }}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    {HIGH_FREQ_TESTS.map((m) => (
                      <option key={m.id} value={m.id}>Module {m.id}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">End Module</label>
                  <select
                    value={range[1]}
                    onChange={(e) => setRange([range[0], parseInt(e.target.value)])}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    {HIGH_FREQ_TESTS.map((m) => (
                      <option key={m.id} value={m.id} disabled={m.id < range[0]}>Module {m.id}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              <Play className="w-4 h-4 inline mr-2 text-indigo-500" />
              Test Mode
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: "MCQ", title: "MCQ Test", desc: "Meaning & Usage" },
                { id: "SPELLING", title: "Spelling Test", desc: "Show meaning, type word" },
                { id: "SENTENCE", title: "Completion", desc: "Contextual usage" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id as TestMode)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    mode === m.id
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      mode === m.id ? "border-indigo-500" : "border-gray-200"
                    }`}
                  />
                  <div>
                    <div className={`font-bold ${mode === m.id ? "text-indigo-900" : "text-gray-900"}`}>
                      {m.title}
                    </div>
                    <div className="text-xs text-gray-500">{m.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Configuration Area */}
        <div className="space-y-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Hash className="w-4 h-4 text-indigo-500" />
                Words per Test
              </label>
              <span className="text-2xl font-black text-indigo-600">{wordCount}</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value))}
              className="w-full accent-indigo-600"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                Timer per Question
              </label>
              <span className="text-2xl font-black text-indigo-600">
                {timeLimit === 0 ? "∞" : `${timeLimit}s`}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 30, 60, 0].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeLimit(t)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    timeLimit === t ? "bg-indigo-600 text-white" : "bg-white text-gray-500 border border-gray-200"
                  }`}
                >
                  {t === 0 ? "None" : `${t}s`}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleStart}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              <CheckCircle2 className="w-5 h-5" />
              Begin Assessment
            </button>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex gap-3 text-amber-800">
              <BookOpen className="w-5 h-5 shrink-0" />
              <p className="text-xs leading-relaxed">
                Assessment will pull random words from your selection. Ensure you have studied the definitions in Bengali and English first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
