import Answer from "../answer";
import { useState } from "react";
import styles from "./mathQuiz.module.css";

export default function MathQuiz() {
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);
  const [bgColor, setBgcolor] = useState("");

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setBgcolor("lightgreen");
    } else {
      setBgcolor("red");
    }

    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  return (
    <div className={styles.gameWrapper} style={{ backgroundColor: bgColor }}>
      <h1>Ваши очки: {score}</h1>
      <p>
        {a} + {b} = ?
      </p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}
