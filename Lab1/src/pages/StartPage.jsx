import React from "react";

export function StartPage() {
  return (
    <section className="page page-start">
      <header className="page-header">
        <h1 className="page-title">Стартова сторінка</h1>
        <p className="page-description">
          Тут гравець зможе обрати тему вікторини, складність і розпочати гру.
          Зараз це лише візуальний каркас без робочих кнопок.
        </p>
      </header>

      <div className="page-content">
        <div className="card">
          <h2 className="card-title">Налаштування вікторини (плейсхолдер)</h2>
          <div className="card-body">
            <div className="form-row">
              <label className="form-label">Тема</label>
              <select className="input" disabled>
                <option>Історія</option>
                <option>Наука</option>
                <option>Фільми</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label">Складність</label>
              <select className="input" disabled>
                <option>Легка</option>
                <option>Середня</option>
                <option>Складна</option>
              </select>
            </div>

            <button className="btn btn-primary" type="button" disabled>
              Почати гру (логіка буде пізніше)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


