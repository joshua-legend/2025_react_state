import { use, useState } from "react";
import Counter from "./Counter";

function App() {
  const [numArray, setNumArray] = useState(Array(30).fill(0));
  const numPlus = (i) => {
    setNumArray((prev) => {
      const newArr = [...prev];
      newArr[i] = newArr[i] + 1;
      return newArr;
    });
  };
  const numMinus = (i) => {
    setNumArray((prev) => {
      const newArr = [...prev];
      newArr[i] = newArr[i] - 1;
      return newArr;
    });
  };

  return (
    <>
      {numArray.map((v, i) => (
        <Counter
          num={v}
          plus={() => {
            numPlus(i);
          }}
          minus={() => {
            numMinus(i);
          }}
        />
      ))}
      <span>total:{numArray.reduce((a, c) => a + c)}</span>
    </>
  );
}
export default App;
