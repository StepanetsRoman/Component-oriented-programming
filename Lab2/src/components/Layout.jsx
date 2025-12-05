import React from "react";
import { QuizHeader } from "./QuizHeader.jsx";

export function Layout({ children }) {
  return (
    <div className="app-root">
      <QuizHeader />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        Lab2. Вся логіка вікторини реалізована через кастомні React-хуки.
      </footer>
    </div>
  );
}


