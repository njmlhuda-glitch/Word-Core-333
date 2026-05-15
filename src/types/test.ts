import { Word } from "../data/vocabulary";

export type TestMode = "MCQ" | "SPELLING" | "SENTENCE";

export interface TestSettings {
  selectedModules: number[];
  customRange: [number, number] | null;
  mode: TestMode;
  wordCount: number;
  timeLimit: number; // in seconds per question, 0 for no limit
  totalTimeLimit: number; // in seconds for entire test, 0 for no limit
}

export interface Question {
  id: string;
  word: Word;
  type: TestMode;
  options?: string[]; // For MCQ: meanings or examples
  correctAnswer: string;
}

export interface TestResult {
  score: number;
  total: number;
  timeSpent: number;
  wrongAnswers: {
    question: Question;
    userAnswer: string;
  }[];
}
