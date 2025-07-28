import { useState } from 'react';
import "./Lottery.css"

function randomNum() {
  return Math.floor(Math.random() * 899) + 100;
}

function sumOfDigits(number) {
  const numStr = String(number);
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  console.log(sum);
  return sum === 15;
}

export default function Lottery() {
  let [lotNum, setLotNum] = useState(0);

  let updateNum = () => {
    setLotNum(randomNum());
  };
  return (
    <div className='lotteryGame'>
      
      <div className='winMsg'>
        <h1><i>Lottery Game!</i></h1>
        {sumOfDigits(lotNum) ? (
        <b>
          <p>Congratulations, you Won!</p>
        </b>
      ) : (
        ''
      )}
      </div>
      <div className='lotteryNum'>
        <h3>Lottery Ticket = {lotNum}</h3>
        <button onClick={updateNum}>Get New Ticket</button>
      </div>
    </div>
  );
}
