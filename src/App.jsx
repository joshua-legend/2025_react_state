import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [total, setTotal] = useState(Array(100).fill(0));
  const plus = () => setTotal((prev) => {});
  return (
    <>
      <Counter total={total} setTotal={setTotal} />
      <Counter total={total1} setTotal={setTotal1} />
      <Counter total={total2} setTotal={setTotal2} />
      <span>{total + total1 + total2}</span>
    </>
  );
}
export default App;
