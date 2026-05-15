import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TestSettings, Question, TestResult } from "../../types/test";
import { ALL_WORDS } from "../../data/vocabulary";
import { TestConfig } from "./TestConfig";
import { MCQMode } from "./MCQMode";
import { SpellingMode } from "./SpellingMode";
import { SentenceMode } from "./SentenceMode";
import { Trophy, RefreshCw, Home, ArrowLeft, XCircle } from "lucide-react";
import { addToWeakZone } from "../../lib/weakZoneUtils";

export const VocabularyTestManager: React.FC = () => {
  const [phase, setPhase] = useState<"setup" | "active" | "results">("setup");
  const [settings, setSettings] = useState<TestSettings | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);

  const startTest = (config: TestSettings) => {
    // Select Words
    let sourceWords = [];
    if (config.customRange) {
      sourceWords = ALL_WORDS.slice(config.customRange[0] - 1, config.customRange[1]);
    } else {
      config.selectedModules.forEach((mod) => {
        const start = (mod - 1) * 37;
        sourceWords.push(...ALL_WORDS.slice(start, start + 37));
      });
    }

    // Shuffle and pick
    const shuffled = [...sourceWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(config.wordCount, shuffled.length));

    // Generate Questions
    const generatedQuestions: Question[] = selected.map((word, idx) => {
      const q: Question = {
        id: `q-${idx}`,
        word,
        type: config.mode,
        correctAnswer: config.mode === "MCQ" ? word.meaning[0] : word.word,
      };

      if (config.mode === "MCQ") {
        // Find 3 wrong options
        const otherWords = ALL_WORDS.filter((w) => w.word !== word.word);
        const wrongOptions = otherWords
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((w) => w.meaning[0]);
        
        q.options = [word.meaning[0], ...wrongOptions].sort(() => 0.5 - Math.random());
      }

      return q;
    });

    setQuestions(generatedQuestions);
    setSettings(config);
    setPhase("active");
  };

  const finishTest = (score: number, wrongAnswers: any[]) => {
    // Save to Weak Zone
    if (wrongAnswers.length > 0) {
      addToWeakZone(wrongAnswers.map(wa => wa.question.word));
    }

    setResult({
      score,
      total: questions.length,
      timeSpent: 0, // Could add a counter
      wrongAnswers,
    });
    setPhase("results");
  };

  const reset = () => {
    setPhase("setup");
    setSettings(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <AnimatePresence mode="wait">
        {phase === "setup" && (
          <motion.div
            key="setup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TestConfig onStart={startTest} />
          </motion.div>
        )}

        {phase === "active" && settings && (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <button 
              onClick={reset}
              className="absolute -top-12 left-0 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Cancel Test
            </button>

            {settings.mode === "MCQ" && (
              <MCQMode
                questions={questions}
                timeLimit={settings.timeLimit}
                onComplete={finishTest}
              />
            )}
            {settings.mode === "SPELLING" && (
              <SpellingMode
                questions={questions}
                timeLimit={settings.timeLimit}
                onComplete={finishTest}
              />
            )}
            {settings.mode === "SENTENCE" && (
              <SentenceMode
                questions={questions}
                timeLimit={settings.timeLimit}
                onComplete={finishTest}
              />
            )}
          </motion.div>
        )}

        {phase === "results" && result && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="bg-indigo-600 p-12 text-center text-white relative">
              <div className="absolute top-4 left-4">
                <Trophy className="w-12 h-12 opacity-20 rotate-12" />
              </div>
              <h2 className="text-4xl font-black mb-2">Test Complete!</h2>
              <p className="text-indigo-100 font-medium">Here's how you performed</p>
              
              <div className="mt-8 inline-flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-black">{Math.round((result.score / result.total) * 100)}%</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60">Success Rate</div>
                </div>
                <div className="mx-8 w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-5xl font-black">{result.score}/{result.total}</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60">Score</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {result.wrongAnswers.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Review Mistakes
                  </h3>
                  <div className="space-y-3">
                    {result.wrongAnswers.map((w, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-gray-900">{w.question.word.word}</div>
                          <div className="text-xs text-gray-400">{w.question.word.meaning[0]}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-red-500 line-through font-medium">{w.userAnswer || "No Answer"}</div>
                          <div className="text-sm text-green-600 font-bold">{w.question.word.word}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => startTest(settings!)}
                  className="flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-shadow hover:shadow-lg shadow-indigo-200"
                >
                  <RefreshCw className="w-5 h-5" /> Retake Test
                </button>
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  <Home className="w-5 h-5" /> Back to Setup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
