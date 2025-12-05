import React from "react";
import styled from "styled-components";
import { QuizHeader } from "./QuizHeader.jsx";

const AppRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 18px;

  @media (min-width: 768px) {
    padding: 32px 40px;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Footer = styled.footer`
  font-size: 0.78rem;
  text-align: center;
  color: var(--text-muted);
  padding-top: 4px;
`;

export function Layout({ children }) {
  return (
    <AppRoot>
      <QuizHeader />
      <Main>{children}</Main>
      <Footer>
        Lab4. Роутинг з динамічним id користувача та стилізація через
        styled-components.
      </Footer>
    </AppRoot>
  );
}


