import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { Word } from "../../data/vocabulary";
import { Question } from "../../types/test";
import { Volume2, Check, X, Timer } from "lucide-react";

interface Props {
  questions: Question[];
  timeLimit: number;
  onComplete: (score: number, wrongAnswers: any[]) => void;
}

export const MCQMode: React.FC<Props> = ({ questions, timeLimit, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);

  const currentQuestion = questions[currentIndex];

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setTimeLeft(timeLimit);
    } else {
      onComplete(score, wrongAnswers);
    }
  }, [currentIndex, questions.length, score, timeLimit, wrongAnswers, onComplete]);

  useEffect(() => {
    if (timeLimit > 0 && selectedOption === null) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleOptionSelect(""); // Timeout
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, selectedOption, timeLimit]);

  const handleOptionSelect = (option: string) => {
    if (selectedOption !== null) return;

    setSelectedOption(option);
    const correct = option.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        { question: currentQuestion, userAnswer: option },
      ]);
    }

    setTimeout(handleNext, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Quiz Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-gray-400">
            Progress: <span className="text-gray-900">{currentIndex + 1} / {questions.length}</span>
          </div>
          <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              className="h-full bg-indigo-500"
            />
          </div>
        </div>
        
        {timeLimit > 0 && (
          <div className={`flex items-center gap-2 font-mono font-bold ${timeLeft < 5 ? "text-red-500 animate-pulse" : "text-gray-600"}`}>
            <Timer className="w-4 h-4" />
            {timeLeft}s
          </div>
        )}
      </div>

      {/* Question Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
              Select Meaning
            </span>
            <button
              onClick={() => speak(currentQuestion.word.word)}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {currentQuestion.word.word}
          </h3>
          <p className="text-gray-400 font-mono text-sm mt-1">{currentQuestion.word.pronunciation}</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options?.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isAnswer = option.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
            
            let btnClass = "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300";
            if (selectedOption !== null) {
              if (isAnswer) btnClass = "bg-green-100 border-green-500 text-green-700";
              else if (isSelected) btnClass = "bg-red-100 border-red-500 text-red-700";
              else btnClass = "opacity-50 grayscale";
            }

            return (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-5 text-left rounded-xl border-2 transition-all flex justify-between items-center font-medium ${btnClass}`}
              >
                <span>{option}</span>
                {selectedOption !== null && (
                  isAnswer ? <Check className="w-5 h-5 text-green-600" /> : isSelected && <X className="w-5 h-5 text-red-600" />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
