import { useState } from "react";

export default function Answer({ updatePoints }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
        required
      />
      <button type="submit">Проверить</button>
    </form>
  );
}
