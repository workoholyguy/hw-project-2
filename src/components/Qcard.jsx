// import React from "react";
import { useState, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../App.css";
import flashcards from "../data/flashcards";

const Qcard = () => {
  // const [count, setCount] = useState(0);
  // const questionCard = document.querySelector("questionCard");
  const questionCard = useRef(null);
  console.log(questionCard);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("Hidden");
  const showNextQuestion = () => {
    setAnswer("Hidden");
    setIsAnswerRevealed(false);

    if (questionIndex <= flashcards.length - 2) {
      console.log(flashcards.length);
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(questionIndex - questionIndex);
    }
  };

  const showAnswer = () => {
    setIsAnswerRevealed(true);
    console.log(questionIndex);
    console.log(flashcards[questionIndex].question);
    console.log(flashcards[questionIndex].answer);
    setAnswer(flashcards[questionIndex].answer);
  };

  // const [color, setColor] = useState("");
  // const changeColor = () => {
  //   console.log("change color");
  //   console.log(flashcards[questionIndex].color);
  // };

  // const nextQuestionAndColor = () => {
  //   showNextQuestion();
  //   changeColor();
  // };

  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  // console.log(flashcards);
  console.log(flashcards[questionIndex]);
  // console.log(flashcards.length);
  console.log(questionIndex);
  return (
    <div className="questionCardContainer">
      <div
        onClick={showAnswer}
        className={"questionCard card " + (isAnswerRevealed ? "flipped" : "")}
        style={{
          display: "flex",
          justifyContent: "center", // Horizontal centering
          alignItems: "center", // Vertical centering
          flexDirection: "column",
          backgroundColor: flashcards[questionIndex].color,
          textShadow: `-0.1px -0.1px 0 #000, 0.1px -0.1px 0 #000, -0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000`,
          color: "black",
          border: `20px, solid flashcards[questionCard].color`,
          padding: `2%`,
          borderRadius: `12px`,
          flexWrap: `wrap`,
        }}
      >
        <div className="card-side front">
          <h2
            className="question "
            style={{
              display: isAnswerRevealed ? "none" : "flex",
              opacity: "100%",
            }}
          >
            Question {questionIndex + 1}:<br />{" "}
            {flashcards[questionIndex].question}
            <br />
            <br />
          </h2>
        </div>
        <div className="card-side back">
          <h2
            className="answer"
            style={{
              display: isAnswerRevealed ? "flex" : "none",
              opacity: "100%",
            }}
          >
            Answer:
            <br /> {answer}
            {/* <br /> {flashcards[questionIndex].answer} */}
          </h2>
        </div>
        <button
          className={
            "btn btn-reveal-answer" + (isAnswerRevealed ? "flipped" : "")
          }
          onClick={showAnswer}
          style={{
            padding: "10px 20px",
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reveal Answer
        </button>
        {/* <button onClick={nextQuestionAndColor}>Next Question</button> */}
      </div>
      <button
        onClick={showNextQuestion}
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Next Question
      </button>
    </div>
  );
};

export default Qcard;
