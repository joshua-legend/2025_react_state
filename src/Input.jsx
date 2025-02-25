const Input = (props) => {
  const { label, vanilla } = props;
  return (
    <>
      <span>{label}</span>
      <div style={{ padding: "5px 10px", border: "1px solid #efefef", borderRadius: "8px", display: "flex", alignItems: "center" }}>
        <input
          onChange={(e) => {
            vanilla((prev) => e.target.value);
          }}
          style={{ outline: "none", border: "none", width: "100%" }}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
