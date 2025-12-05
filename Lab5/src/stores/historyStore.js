import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "trivia-quiz-history";

export const useHistoryStore = create(
  persist(
    (set) => ({
      history: [],
      addGameResult: (result) =>
        set((state) => ({
          history: [
            {
              id: Date.now(),
              timestamp: new Date().toISOString(),
              ...result
            },
            ...state.history
          ]
        })),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ history: state.history })
    }
  )
);

