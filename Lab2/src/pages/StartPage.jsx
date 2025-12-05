import React from "react";

export function StartPage({ onStart }) {
  return (
    <section className="page page-start">
      <header className="page-header">
        <h1 className="page-title">Стартова сторінка</h1>
        <p className="page-description">
          Оберіть базові параметри вікторини та розпочніть гру.
        </p>
      </header>

      <div className="page-content">
        <div className="card">
          <h2 className="card-title">Налаштування вікторини</h2>
          <div className="card-body">
            <div className="form-row">
              <label className="form-label">Тема</label>
              <select className="input" defaultValue="any">
                <option value="any">Будь-яка</option>
                <option value="history">Історія</option>
                <option value="science">Наука</option>
                <option value="movies">Фільми</option>
              </select>
            </div>

            <button className="btn btn-primary" type="button" onClick={onStart}>
              Почати гру
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


