import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "trivia-quiz-settings";

const defaultSettings = {
  category: "any",
  difficulty: "any",
  questionCount: 5,
  timePerQuestion: 30
};

export const useSettingsStore = create(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateSettings: (patch) =>
        set((state) => ({
          settings: { ...defaultSettings, ...state.settings, ...patch }
        }))
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ settings: state.settings }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        settings: { ...defaultSettings, ...persistedState?.settings }
      })
    }
  )
);

