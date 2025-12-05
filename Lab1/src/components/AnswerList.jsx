import React from "react";

export function AnswerList() {
  const placeholderAnswers = ["Варіант А", "Варіант B", "Варіант C", "Варіант D"];

  return (
    <section className="card answers-card">
      <h3 className="card-subtitle">Варіанти відповіді (плейсхолдер)</h3>
      <ul className="answers-list">
        {placeholderAnswers.map((text, index) => (
          <li key={index} className="answers-item">
            <button className="btn answer-btn" type="button" disabled>
              {text}
            </button>
          </li>
        ))}
      </ul>
      <p className="card-hint">
        Кнопки зараз неактивні. Логіку обробки відповідей буде додано пізніше.
      </p>
    </section>
  );
}


