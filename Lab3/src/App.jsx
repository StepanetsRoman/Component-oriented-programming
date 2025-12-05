import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout.jsx";
import { StartPage } from "./pages/StartPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";
import { ResultsPage } from "./pages/ResultsPage.jsx";
import { GameOverDialog } from "./components/GameOverDialog.jsx";
import { useQuizNavigation, QUIZ_VIEW } from "./hooks/useQuizNavigation.js";
import { useQuizEngine } from "./hooks/useQuizEngine.js";
import { useSettings } from "./settings/SettingsContext.jsx";

export default function App() {
  const nav = useQuizNavigation();
  const { settings } = useSettings();
  const quiz = useQuizEngine(settings);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    if (quiz.isFinished) {
      setShowGameOver(true);
      nav.goToResults();
    }
  }, [quiz.isFinished, nav]);

  const handleStart = () => {
    quiz.resetQuiz();
    nav.goToGame();
  };

  const handleRestartRound = () => {
    quiz.resetQuiz();
    setShowGameOver(false);
    nav.goToGame();
  };

  const handleNextRound = () => {
    quiz.resetQuiz();
    setShowGameOver(false);
    nav.goToStart();
  };

  return (
    <Layout>
      {nav.view === QUIZ_VIEW.START && <StartPage onStart={handleStart} />}

      {nav.view === QUIZ_VIEW.GAME && <GamePage quiz={quiz} />}

      {nav.view === QUIZ_VIEW.RESULTS && (
        <ResultsPage
          score={quiz.score}
          totalQuestions={quiz.totalQuestions}
          correctCount={quiz.correctCount}
          bestStreak={quiz.bestStreak}
        />
      )}

      <GameOverDialog
        open={showGameOver}
        score={quiz.score}
        totalQuestions={quiz.totalQuestions}
        correctCount={quiz.correctCount}
        bestStreak={quiz.bestStreak}
        onRestartRound={handleRestartRound}
        onNextRound={handleNextRound}
      />
    </Layout>
  );
}


