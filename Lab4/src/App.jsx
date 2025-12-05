import React, { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams
} from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { UserSelectPage } from "./pages/UserSelectPage.jsx";
import { StartPage } from "./pages/StartPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";
import { ResultsPage } from "./pages/ResultsPage.jsx";
import { HistoryPage } from "./pages/HistoryPage.jsx";
import { GameOverDialog } from "./components/GameOverDialog.jsx";
import { useQuizEngine } from "./hooks/useQuizEngine.js";
import { useSettings } from "./settings/SettingsContext.jsx";

function QuizRoutes() {
  const { userId } = useParams();
  const { settings } = useSettings();
  const quiz = useQuizEngine(settings);
  const navigate = useNavigate();
  const [showGameOver, setShowGameOver] = useState(false);
  const [history, setHistory] = useState(() => {
    try {
      const raw = window.localStorage.getItem("trivia-quiz-history");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("trivia-quiz-history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (quiz.isFinished) {
      setHistory((prev) => [
        {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          userId,
          score: quiz.score,
          totalQuestions: quiz.totalQuestions,
          correctCount: quiz.correctCount,
          bestStreak: quiz.bestStreak
        },
        ...prev
      ]);
      setShowGameOver(true);
      navigate(`/user/${encodeURIComponent(userId)}/results`, {
        replace: true
      });
    }
  }, [quiz.isFinished, navigate, userId]);

  const handleStart = () => {
    quiz.resetQuiz();
    setShowGameOver(false);
    navigate(`/user/${encodeURIComponent(userId)}/game`, { replace: true });
  };

  const handleRestartRound = () => {
    quiz.resetQuiz();
    setShowGameOver(false);
    navigate(`/user/${encodeURIComponent(userId)}/game`, { replace: true });
  };

  const handleNextRound = () => {
    quiz.resetQuiz();
    setShowGameOver(false);
    navigate(`/user/${encodeURIComponent(userId)}/start`, { replace: true });
  };

  return (
    <>
      <nav className="page-content" aria-label="Навігація по сторінках">
        <div className="card">
          <div className="card-body">
            <div className="form-row">
              <span className="form-label">
                Маршрути для користувача <strong>{userId}</strong>
              </span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <Link className="btn btn-secondary" to="start">
                  Старт
                </Link>
                <Link className="btn btn-secondary" to="game">
                  Гра
                </Link>
                <Link className="btn btn-secondary" to="results">
                  Результати
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          path="start"
          element={<StartPage onStart={handleStart} userId={userId} />}
        />
        <Route
          path="game"
          element={<GamePage quiz={quiz} userId={userId} />}
        />
        <Route
          path="results"
          element={
            <ResultsPage
              score={quiz.score}
              totalQuestions={quiz.totalQuestions}
              correctCount={quiz.correctCount}
              bestStreak={quiz.bestStreak}
              userId={userId}
              history={history.filter((item) => item.userId === userId)}
            />
          }
        />
        <Route
          path="history"
          element={
            <HistoryPage
              userId={userId}
              history={history}
            />
          }
        />
        <Route
          path="*"
          element={<Navigate to={`/user/${encodeURIComponent(userId)}/start`} replace />}
        />
      </Routes>

      <GameOverDialog
        open={showGameOver}
        score={quiz.score}
        totalQuestions={quiz.totalQuestions}
        correctCount={quiz.correctCount}
        bestStreak={quiz.bestStreak}
        onRestartRound={handleRestartRound}
        onNextRound={handleNextRound}
      />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UserSelectPage />} />
        <Route path="/user/:userId/*" element={<QuizRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}


