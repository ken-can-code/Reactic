import './App.css';
import React, { useState } from 'react';
import Square from './Square';

function App() {
  const [whichTurn, setWhichTurn] = useState('O');

  const squares = [];
  for (let i = 0; i < 9; i += 1) {
    squares.push(<Square key={i} whichTurn={whichTurn} setWhichTurn={setWhichTurn} />)
  }
  // console.log('Square array', squares);

  return (
    <div className="App">
      <p className='section-title'>Tic Tac Toe</p>
      <div className='board-area'>
        <div className='board-left'></div>
        <div className='board-main'>
          <div className='board'>
           {squares.map((square) => square)}
          </div>
        </div>
        <div className='board-right'>
          <p id='win'></p>
        </div>
      </div>
      <div className='instruction-area'>
        <div id='left-child'></div>
        <div id='next-message'>
          Next move: <span id='current-turn'>{whichTurn}</span>
        </div>
        <div className='btn'>
          <button id='clear'>Clear</button>
        </div>
      </div>
      <p className='under-text' id='click-or-tap'>
        Click or tap on the above board to play a move!
      </p>
    </div>
  );
}

export default App;
