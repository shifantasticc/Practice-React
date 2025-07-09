import { useState } from 'react';

function init() {
  return Math.random();
}
export default function Counter() {
  let [count, setCount] = useState(init);

  let incCount = () => {
    setCount(count + 1);
    // setCount((currCount) => {
    //   return currCount + 1;
    // });
    // setCount((currCount) => {
    //   return currCount + 1;
    // });
  };

  return (
    <div>
      <h4>Count = {count}</h4>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
