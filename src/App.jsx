import './App.css';
import React, { useState } from 'react';
import Square from './Square';

function App() {
  // let winAreaMessage = ''; // trying to render dynamically 3 ways in return statement
  const rightDiagArray = [0, 4, 8];
  const leftDiagArray = [6, 4, 2]
  const blankBoardArray = [];
  for (let i = 0; i < 9; i += 1) {
    blankBoardArray.push('');
  }
  const threeZeroArray = [0, 0, 0];
  const [ rows, setRows ] = useState(threeZeroArray);
  const [ columns, setColumns ] = useState(threeZeroArray);
  const [ rightDiagonal, setRightDiagonal ] = useState(rightDiagArray);
  const [ leftDiagonal, setLeftDiagonal ] = useState(leftDiagArray);
  const [ numOfMoves, setNumOfMoves ] = useState(0);
  const [ gameWon, setGameWon ] = useState(false);
  const [ whichTurn, setWhichTurn ] = useState('X');
  const [ clearBoard, setClearBoard ] = useState(false);
  const [ squaresContents, setSquaresContents ] = useState(blankBoardArray);

  const checkWin = (coordinates, id) => {
    setRows(rows.map((row, i) => {
      if (coordinates[0] === i) {
        whichTurn === 'X' ? row += 1 : row -= 1;
        if (row === 3 || row === -3) {
          setGameWon(true);
        }
        return row;
      }
      return row
    }));
    setColumns(columns.map((column, i) => {
      if (coordinates[1] === i) {
        whichTurn === 'X' ? column += 1 : column -= 1;
        if (column === 3 || column === -3) {
          setGameWon(true);
          return column;
        }
      }
      return column;
    }));
    setRightDiagonal(rightDiagonal.map((position) => {
      if (position === id) {
        whichTurn === 'X' ? position = 'O' : position = 'X';
        // console.log('id:', id, 'position:', position, 'rightDiagnal', rightDiagonal)
        if (rightDiagonal[0] === rightDiagonal[1]
          && rightDiagonal[1] === rightDiagonal[2]) {
          setGameWon(true);
        }
        return position;
      }
      return position;
    }));
    setLeftDiagonal(leftDiagonal.map((position) => {
      if (position === id) {
        whichTurn === 'X' ? position = 'O' : position = 'X';
        console.log('id:', id, 'position:', position, 'leftDiagnal', leftDiagonal)

        if (leftDiagonal[0] === leftDiagonal[1]
          && leftDiagonal[1] === leftDiagonal[2]) {
            console.log('left diag win!');
          setGameWon(true);
        }
        return position;
      }
      return position;
    }));
  };

  const squares = [];
  for (let i = 0; i < 9; i += 1) {
    squares.push(<Square
      key={i}
      id={i}
      checkWin={checkWin}
      coordinates={[Math.floor(i / 3), (i % 3)]}
      numOfMoves={numOfMoves}
      setNumOfMoves={setNumOfMoves}
      squaresContents={squaresContents}
      setSquaresContents={setSquaresContents}
      clearBoard={clearBoard}
      setClearBoard={setClearBoard}
      whichTurn={whichTurn}
      setWhichTurn={setWhichTurn}
      gameWon={gameWon}
    />)
  }

  // useEffect(() => {
    // if (numOfMoves === 9 && gameWon === false) { trying to not need this
    //   Disable all square click handlers more elegantly using state?
    // };
  // }, [gameWon, numOfMoves]);

  const handleClear = () => {
    setClearBoard(true);
    setGameWon(false);
    setRows(threeZeroArray);
    setColumns(threeZeroArray);
    setRightDiagonal(rightDiagArray);
    setLeftDiagonal(leftDiagArray);
  }

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
          <p id='win'>{(
            gameWon === false && numOfMoves === 9
            ? 'It\'s a draw!'
            : gameWon
              ? `${whichTurn === 'O' ? 'X' : 'O'} wins!`
              : ''
          )}</p>
        </div>
      </div>
      <div className='instruction-area'>
        <div id='left-child'></div>
        <div id='next-message'>
          Next move: <span id='current-turn'>{whichTurn}</span>
        </div>
        <div className='btn'>
          <button id='clear' onClick={handleClear}>Clear</button>
        </div>
      </div>
      <p className='under-text' id='click-or-tap'>
        { ( gameWon || numOfMoves === 9
          ? 'Click or tap \'Clear\' to start a new game!'
          : 'Click or tap on the above board to play a move!'
        )}
      </p>
    </div>
  );
}

export default App;
