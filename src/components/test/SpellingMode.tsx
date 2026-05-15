import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Question } from "../../types/test";
import { Timer, Keyboard, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";

interface Props {
  questions: Question[];
  timeLimit: number;
  onComplete: (score: number, wrongAnswers: any[]) => void;
}

export const SpellingMode: React.FC<Props> = ({ questions, timeLimit, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserInput("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setTimeLeft(timeLimit);
    } else {
      onComplete(score, wrongAnswers);
    }
  };

  useEffect(() => {
    if (timeLimit > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmit("");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isSubmitted, timeLimit]);

  const handleSubmit = (val?: string) => {
    if (isSubmitted) return;

    const finalInput = (val !== undefined ? val : userInput).trim();
    setIsSubmitted(true);
    
    const correct = finalInput.toLowerCase() === currentQuestion.word.word.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        { question: currentQuestion, userAnswer: finalInput },
      ]);
    }

    setTimeout(handleNext, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="text-sm font-bold text-gray-400">
          Question: <span className="text-gray-900">{currentIndex + 1} / {questions.length}</span>
        </div>
        {timeLimit > 0 && (
          <div className={`flex items-center gap-2 font-mono font-bold ${timeLeft < 5 ? "text-red-500 animate-pulse" : "text-gray-600"}`}>
            <Timer className="w-4 h-4" />
            {timeLeft}s
          </div>
        )}
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center"
      >
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">
            Spell the word
          </span>
          <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
            <h4 className="text-xl font-bold text-indigo-900 mb-2">
              {currentQuestion.word.meaning[0]}
            </h4>
            <p className="text-indigo-600 font-medium italic">
              {currentQuestion.word.bengali}
            </p>
          </div>
        </div>

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            disabled={isSubmitted}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Type your answer here..."
            className={`w-full p-5 text-center text-3xl font-black rounded-xl border-4 outline-none transition-all ${
              isSubmitted
                ? isCorrect
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-red-500 bg-red-50 text-red-700"
                : "border-gray-100 bg-gray-50 focus:border-indigo-500 text-indigo-900"
            }`}
          />
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              {!isCorrect ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold">
                    <AlertCircle className="w-5 h-5" />
                    Incorrect!
                  </div>
                  <div className="text-sm text-gray-500">
                    Correct Spelling: <span className="font-bold text-green-600">{currentQuestion.word.word}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  Perfect!
                </div>
              )}
            </motion.div>
          )}
        </div>

        {!isSubmitted && (
          <button
            onClick={() => handleSubmit()}
            className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto"
          >
            Submit <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </motion.div>

      <div className="flex justify-center gap-6 text-gray-400">
        <div className="flex items-center gap-2 text-xs font-medium">
          <Keyboard className="w-4 h-4" />
          Press Enter to Submit
        </div>
      </div>
    </div>
  );
};
