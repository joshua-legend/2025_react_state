const Chicken = () => {
  const evolution = ["🥚", "🐣", "🐥", "🐓", "🍗"];
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => (prev == evolution.length - 1 ? prev : prev + 1));
  };
  const prevStep = () => {
    setStep((prev) => (prev == 0 ? prev : prev - 1));
  };
  return (
    <>
      <button onClick={prevStep}>이전 스텝</button>
      <span>{evolution[step]}</span>
      <button onClick={nextStep}>다음 스텝</button>
    </>
  );
};

export default Chicken;
