// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import flashcards from "./data/flashcards";
import Qcard from "./components/Qcard";
import flashcards from "./data/flashcards";

function App() {
  return (
    <div className="appContainer">
      <>
        <header className="appHeader">
          <h1>The Ultimate JavaScript Mastery Quiz!</h1>
          <p>
            How well do you know JavaScript? Test your skills with this
            interactive quiz and find out!
          </p>
          <p>Number of cards: {flashcards.length}</p>
        </header>
        <Qcard />
      </>
    </div>
  );
}

export default App;
