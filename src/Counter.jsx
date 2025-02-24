import { useState } from "react";

//1. 같은레벨 한겜더
//2. 다음탄 ㄱ

const Counter = () => {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => (prev == 0 ? 0 : prev - 1));
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <span style={{ color: 10 <= num ? "red" : "black" }}>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;
