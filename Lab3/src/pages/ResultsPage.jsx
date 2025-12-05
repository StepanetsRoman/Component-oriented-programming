import React from "react";

export function ResultsPage({
  score,
  totalQuestions,
  correctCount,
  bestStreak
}) {
  return (
    <section className="page page-results">
      <header className="page-header">
        <h1 className="page-title">Сторінка результатів</h1>
        <p className="page-description">
          Розширена інформація про завершену гру.
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
        </div>
      </div>
    </section>
  );
}


