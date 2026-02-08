const Counter = ({ exponent, setExponent }) => {
  const decrement = () => setExponent((prevExponent) => prevExponent - 1);
  const increment = () => setExponent((prevExponent) => prevExponent + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{exponent}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
