import { h } from 'preact';
import { useState } from 'preact/compat';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const resetCounter = (e) => {
    e.preventDefault();
    setCount(0);
  };

  return (
    <div className="counter">
      <button
        className="counter__action"
        id="increment"
        onClick={incrementCounter}
      >
        You clicked me {count} times
      </button>
      <button className="counte__action" id="reset" onClick={resetCounter}>
        Reset the counter
      </button>
    </div>
  );
};

export default Counter;
