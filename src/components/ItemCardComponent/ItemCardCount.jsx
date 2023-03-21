import React from "react";
import "./ItemCard.css"

function OfferItemCount() {
  const [count, setCount] = React.useState(1);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <div className="countBox">
      <button onClick={decrementCount} className="customCard-button countBtn">-</button>
      <span className="contador">{count}</span>
      <button onClick={incrementCount} className="customCard-button countBtn">+</button>
    </div>
  );
};

export default OfferItemCount;
