import React from "react";
import { Layout } from "./components/Layout.jsx";
import { StartPage } from "./pages/StartPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";
import { ResultsPage } from "./pages/ResultsPage.jsx";
import { useQuizNavigation, QUIZ_VIEW } from "./hooks/useQuizNavigation.js";
import { useQuizEngine } from "./hooks/useQuizEngine.js";

export default function App() {
  const nav = useQuizNavigation();
  const quiz = useQuizEngine();

  const handleStart = () => {
    quiz.resetQuiz();
    nav.goToGame();
  };

  const handleFinish = () => {
    nav.goToResults();
  };

  const handlePlayAgain = () => {
    quiz.resetQuiz();
    nav.goToGame();
  };

  return (
    <Layout>
      {nav.view === QUIZ_VIEW.START && <StartPage onStart={handleStart} />}

      {nav.view === QUIZ_VIEW.GAME && (
        <GamePage
          quiz={quiz}
          onGameFinished={handleFinish}
        />
      )}

      {nav.view === QUIZ_VIEW.RESULTS && (
        <ResultsPage
          score={quiz.score}
          totalQuestions={quiz.totalQuestions}
          correctCount={quiz.correctCount}
          bestStreak={quiz.bestStreak}
          onPlayAgain={handlePlayAgain}
          onBackToStart={nav.goToStart}
        />
      )}
    </Layout>
  );
}


