import { useCallback, useState } from "react";

export const QUIZ_VIEW = {
  START: "start",
  GAME: "game",
  RESULTS: "results"
};

export function useQuizNavigation() {
  const [view, setView] = useState(QUIZ_VIEW.START);

  const goToStart = useCallback(() => setView(QUIZ_VIEW.START), []);
  const goToGame = useCallback(() => setView(QUIZ_VIEW.GAME), []);
  const goToResults = useCallback(() => setView(QUIZ_VIEW.RESULTS), []);

  return {
    view,
    goToStart,
    goToGame,
    goToResults
  };
}


