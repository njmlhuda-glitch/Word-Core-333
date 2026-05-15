import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Question } from "../../types/test";
import { Timer, FileText, Send, XCircle, CheckCircle } from "lucide-react";

interface Props {
  questions: Question[];
  timeLimit: number;
  onComplete: (score: number, wrongAnswers: any[]) => void;
}

export const SentenceMode: React.FC<Props> = ({ questions, timeLimit, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = questions[currentIndex];
  const example = currentQuestion.word.example[0] || "No example available.";
  
  // Replace the word in example with blanks
  const maskedSentence = example.replace(
    new RegExp(currentQuestion.word.word, "gi"),
    "__________"
  );

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

    setTimeout(handleNext, 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="text-sm font-bold text-gray-400">
          Progress: <span className="text-gray-900">{currentIndex + 1} / {questions.length}</span>
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-gray-800">Complete the Sentence</h4>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8">
          <p className="text-2xl font-medium text-gray-700 leading-relaxed text-center">
            "{maskedSentence}"
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full relative">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              disabled={isSubmitted}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Type the missing word..."
              className={`w-full p-4 pl-12 text-center text-2xl font-bold rounded-xl border-2 outline-none transition-all ${
                isSubmitted
                  ? isCorrect
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-200 focus:border-indigo-500"
              }`}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
              {isSubmitted ? (
                isCorrect ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </div>
          </div>

          {isSubmitted && !isCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-gray-500"
            >
              Correct word: <span className="text-green-600 font-bold">{currentQuestion.word.word}</span>
            </motion.div>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400 font-medium">{currentQuestion.word.meaning[0]}</p>
            <p className="text-xs text-indigo-400 mt-1">{currentQuestion.word.bengali}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
