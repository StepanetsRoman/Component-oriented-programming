import React, { useEffect } from "react";
import { QuestionCard } from "../components/QuestionCard.jsx";
import { AnswerList } from "../components/AnswerList.jsx";
import { Scoreboard } from "../components/Scoreboard.jsx";

export function GamePage({ quiz, onGameFinished }) {
  const {
    currentQuestion,
    totalQuestions,
    currentIndex,
    score,
    correctCount,
    streak,
    bestStreak,
    isFinished,
    handleAnswer
  } = quiz;

  useEffect(() => {
    if (isFinished) {
      onGameFinished?.();
    }
  }, [isFinished, onGameFinished]);

  return (
    <section className="page page-game">
      <header className="page-header">
        <h1 className="page-title">Основна сторінка гри</h1>
        <p className="page-description">
          Оберіть правильну відповідь на кожне запитання, щоб набрати якомога
          більше очок.
        </p>
      </header>

      <div className="page-content page-content-grid">
        <div className="game-main-column">
          <QuestionCard
            question={currentQuestion}
            index={currentIndex}
            total={totalQuestions}
          />
          <AnswerList
            answers={currentQuestion?.answers ?? []}
            disabled={isFinished}
            onSelect={handleAnswer}
          />
        </div>
        <div className="game-side-column">
          <Scoreboard
            score={score}
            totalQuestions={totalQuestions}
            correctCount={correctCount}
            streak={streak}
            bestStreak={bestStreak}
          />
        </div>
      </div>
    </section>
  );
}


