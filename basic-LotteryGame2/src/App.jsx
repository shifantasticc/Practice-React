// import { useState } from 'react'
import './App.css';
import { sum } from './helper';
import Lottery from './Lottery';

function App() {
  let winCondition = (ticket) => {
    // return ticket[0] === 0;
    // return ticket.every((num) => num === ticket[0]);
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
