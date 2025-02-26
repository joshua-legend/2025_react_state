import { useState } from "react";
import Price from "./Price";
import Counter from "./Counter";

function App() {
  const [product, setProduct] = useState([
    { price: 10000, cnt: 1, maxCount: 12 },
    { price: 20000, cnt: 1, maxCount: 1 },
    { price: 30000, cnt: 1, maxCount: 1000 },
  ]);

  const plus = (i) => {
    setProduct((prev) => {
      const newArr = [...prev];
      const { cnt, maxCount } = newArr[i];
      newArr[i].cnt = cnt == maxCount ? cnt : cnt + 1;
      return newArr;
    });
  };

  const minus = (i) => {
    setProduct((prev) => {
      const newArr = [...prev];
      newArr[i].cnt = newArr[i].cnt == 1 ? 1 : newArr[i].cnt - 1;
      return newArr;
    });
  };

  return (
    <>
      {product.map((v, i) => (
        <>
          <Price price={v.price} />
          <Counter
            plus={() => {
              plus(i);
            }}
            minus={() => {
              minus(i);
            }}
            cnt={v.cnt}
          />
        </>
      ))}
      <span>총액: {product.map((v) => v.price * v.cnt).reduce((a, c) => a + c)}</span>
    </>
  );
}

export default App;
