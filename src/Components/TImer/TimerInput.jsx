import { useState } from "react";
import { Timer } from "./TImer";

export default function TImerInput() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [startItem, setStartItem] = useState(false);

  const handleStart = () => {
    setStartItem(true);
  };

  return (
    <div>
      <p>initial should be greater then final</p>
      <input
        type="text"
        value={start}
        placeholder="Initial"
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="final"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>
      {startItem ? <Timer initial={start} final={end} /> : ""}
    </div>
  );
}
