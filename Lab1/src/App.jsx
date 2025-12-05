import React from "react";
import { Layout } from "./components/Layout.jsx";
import { StartPage } from "./pages/StartPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";
import { ResultsPage } from "./pages/ResultsPage.jsx";

export default function App() {
  return (
    <Layout>
      <StartPage />
      <GamePage />
      <ResultsPage />
    </Layout>
  );
}


