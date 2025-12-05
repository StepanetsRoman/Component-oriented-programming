import React from "react";

export function Scoreboard() {
  return (
    <aside className="card scoreboard-card">
      <h3 className="card-subtitle">Результат (плейсхолдер)</h3>
      <div className="scoreboard-row">
        <span>Поточний рахунок:</span>
        <span className="score-placeholder">0</span>
      </div>
      <div className="scoreboard-row">
        <span>Кількість запитань:</span>
        <span className="score-placeholder">--</span>
      </div>
      <div className="scoreboard-row">
        <span>Правильні відповіді:</span>
        <span className="score-placeholder">--</span>
      </div>
      <p className="card-hint">
        Дані заповняться пізніше на основі логіки вікторини.
      </p>
    </aside>
  );
}


