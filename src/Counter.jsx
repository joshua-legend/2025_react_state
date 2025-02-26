const Counter = (props) => {
  const { num, plus, minus } = props;
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;
