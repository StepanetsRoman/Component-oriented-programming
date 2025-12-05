import React from "react";
import { QuizHeader } from "./QuizHeader.jsx";

export function Layout({ children }) {
  return (
    <div className="app-root">
      <QuizHeader />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        Lab3. Налаштування гри збережені в localStorage, логіка — у хуках та
        контексті.
      </footer>
    </div>
  );
}


