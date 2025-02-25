const Counter = (props) => {
  const { total, setTotal } = props;
  const plus = () => {
    setTotal((prev) => prev + 1);
  };
  const minus = () => {
    setTotal((prev) => (prev == 0 ? 0 : prev - 1));
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{total}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;
