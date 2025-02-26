const HelloButton = (props) => {
  const { num } = props;
  const abc = (num) => {
    console.log(`누른 번호는 ${num}입니다.`);
  };
  return <button onClick={() => abc(num)}>{num}번</button>;
};

export default HelloButton;
