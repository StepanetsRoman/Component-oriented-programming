import React from "react";

export function ResultsPage() {
  return (
    <section className="page page-results">
      <header className="page-header">
        <h1 className="page-title">Сторінка результатів</h1>
        <p className="page-description">
          Після завершення вікторини тут буде показано підсумкові результати,
          статистику та можливість зіграти ще раз.
        </p>
      </header>

      <div className="page-content">
        <div className="card results-card">
          <h2 className="card-title">Підсумок гри (плейсхолдер)</h2>
          <div className="card-body">
            <p className="results-row">
              <span className="results-label">Загальний рахунок:</span>
              <span className="results-value">0 / N</span>
            </p>
            <p className="results-row">
              <span className="results-label">Правильні відповіді:</span>
              <span className="results-value">--</span>
            </p>
            <p className="results-row">
              <span className="results-label">Найкраща серія:</span>
              <span className="results-value">--</span>
            </p>
            <p className="card-hint">
              Ці значення будуть заповнені після реалізації бізнес-логіки.
            </p>
          </div>

          <div className="card-footer">
            <button className="btn" type="button" disabled>
              Зіграти ще раз
            </button>
            <button className="btn btn-secondary" type="button" disabled>
              Повернутися на старт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


