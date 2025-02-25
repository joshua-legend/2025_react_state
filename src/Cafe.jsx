const Cafe = () => {
  const [num, setNum] = useState(0);
  const menu = [
    { name: "바닐라크림콜드블루", price: 5500 },
    { name: "아메리카노", price: 2000 },
    { name: "프라푸치노", price: 3500 },
    { name: "화이트초코", price: 4500 },
    { name: "카페라떼요", price: 4000 },
  ];
  const nextMenu = () => {
    setNum((prev) => {
      if (prev == 4) {
        alert("마지막 메뉴입니다.");
        return 4;
      } else {
        return prev + 1;
      }
    });
  };

  const prevMenu = () => {
    setNum((prev) => {
      if (prev == 0) {
        alert("첫번째 메뉴입니다.");
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div>
      <button onClick={prevMenu}>이전 메뉴</button>
      <span>메뉴 이름:{menu[num].name}</span>
      <span>메뉴 가격:{menu[num].price}</span>
      <button onClick={nextMenu}>다음 메뉴</button>
    </div>
  );
};
export default Cafe;
