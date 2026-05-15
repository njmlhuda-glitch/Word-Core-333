import { Word } from '../data/vocabulary';

const WEAK_ZONE_KEY = 'vocabulary_master_weak_zone';

export interface WeakWord {
  word: Word;
  count: number; // How many times it was missed
  lastMissed: number; // Timestamp
}

export const getWeakWords = (): WeakWord[] => {
  const stored = localStorage.getItem(WEAK_ZONE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const addToWeakZone = (words: Word[]) => {
  const current = getWeakWords();
  const now = Date.now();

  words.forEach(word => {
    const existing = current.find(w => w.word.word === word.word);
    if (existing) {
      existing.count += 1;
      existing.lastMissed = now;
    } else {
      current.push({
        word,
        count: 1,
        lastMissed: now,
      });
    }
  });

  // Sort by count (most missed first) and then date
  current.sort((a, b) => b.count - a.count || b.lastMissed - a.lastMissed);

  localStorage.setItem(WEAK_ZONE_KEY, JSON.stringify(current.slice(0, 50))); // Keep top 50
};

export const removeFromWeakZone = (wordStr: string) => {
  const current = getWeakWords();
  const filtered = current.filter(w => w.word.word !== wordStr);
  localStorage.setItem(WEAK_ZONE_KEY, JSON.stringify(filtered));
};

export const clearWeakZone = () => {
  localStorage.removeItem(WEAK_ZONE_KEY);
};
