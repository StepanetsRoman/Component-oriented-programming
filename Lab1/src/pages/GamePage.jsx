import React from "react";
import { QuestionCard } from "../components/QuestionCard.jsx";
import { AnswerList } from "../components/AnswerList.jsx";
import { Scoreboard } from "../components/Scoreboard.jsx";

export function GamePage() {
  return (
    <section className="page page-game">
      <header className="page-header">
        <h1 className="page-title">Основна сторінка гри</h1>
        <p className="page-description">
          Тут відбувається процес вікторини: показ запитань, варіантів відповідей
          та поточного рахунку. Наразі це статичні плейсхолдери.
        </p>
      </header>

      <div className="page-content page-content-grid">
        <div className="game-main-column">
          <QuestionCard />
          <AnswerList />
        </div>
        <div className="game-side-column">
          <Scoreboard />
        </div>
      </div>
    </section>
  );
}


