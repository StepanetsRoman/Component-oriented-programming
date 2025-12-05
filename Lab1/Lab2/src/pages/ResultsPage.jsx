import React from "react";

export function ResultsPage({
  score,
  totalQuestions,
  correctCount,
  bestStreak,
  onPlayAgain,
  onBackToStart
}) {
  return (
    <section className="page page-results">
      <header className="page-header">
        <h1 className="page-title">Сторінка результатів</h1>
        <p className="page-description">
          Підсумок вашої гри у вікторину.
        </p>
      </header>

      <div className="page-content">
        <div className="card results-card">
          <h2 className="card-title">Підсумок гри</h2>
          <div className="card-body">
            <p className="results-row">
              <span className="results-label">Загальний рахунок:</span>
              <span className="results-value">
                {score} / {totalQuestions}
              </span>
            </p>
            <p className="results-row">
              <span className="results-label">Правильні відповіді:</span>
              <span className="results-value">{correctCount}</span>
            </p>
            <p className="results-row">
              <span className="results-label">Найкраща серія:</span>
              <span className="results-value">{bestStreak}</span>
            </p>
          </div>

          <div className="card-footer">
            <button className="btn btn-primary" type="button" onClick={onPlayAgain}>
              Зіграти ще раз
            </button>
            <button className="btn btn-secondary" type="button" onClick={onBackToStart}>
              Повернутися на старт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


