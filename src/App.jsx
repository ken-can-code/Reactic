import './App.css';
import React, { useState, useEffect } from 'react';
import Square from './Square';

function App() {
  // console.log('bottomTextArea', bottomTextArea);
  const blankBoardArray = [];
  for (let i = 0; i < 9; i += 1) {
    blankBoardArray.push('');
  }
  const threeZeroArr = [0, 0, 0];

  const [ rows, setRows ] = useState(threeZeroArr);
  const [ columns, setColumns ] = useState(threeZeroArr);
  const [ rightDiagonal, setRightDiagonal ] = useState(threeZeroArr);
  const [ leftDiagonal, setLeftDiagonal ] = useState(threeZeroArr);
  const [ numOfMoves, setNumOfMoves ] = useState(0);
  const [ gameWon, setGameWon ] = useState(false);
  const [ whichTurn, setWhichTurn ] = useState('O');
  const [ clearBoard, setClearBoard ] = useState(false);
  const [ squaresContents, setSquaresContents ] = useState(blankBoardArray);

  const checkWin = (coordinates, id) => { // [2, 2] // 'O' adds 1, 'X' subtracts 1
    // console.log('coordinates', coordinates);
    const rowPosition = coordinates[0];
    const columnPosition = coordinates[1];
    // [0, 0, 0] < 'rows' state and 'columns' state
    // console.log('rows before', rows, 'columns before', columns);
    setRows(rows.map((row, i) => {
      if (rowPosition === i) {
        whichTurn === 'O' ? row += 1 : row -= 1; 
        if (row === 3 || row === -3) {
          setGameWon(true);
        }
        return row;
      }
      return row
    }));
    setColumns(columns.map((column, i) => {
      if (columnPosition === i) {
        whichTurn === 'O' ? column += 1 : column -= 1; 
        if (column === 3 || column === -3) {
          setGameWon(true);
        }
        return column;
      }
      return column;
    }));
    setRightDiagonal(rightDiagonal.map((position, i) => {
      if (id === 0 && i === 0) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      if (id === 4 && i === 1) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      if (id === 8 && i === 2) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      return position;
    }));
    setLeftDiagonal(leftDiagonal.map((position, i) => {
      if (id === 6 && i === 0) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      if (id === 4 && i === 1) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      if (id === 2 && i === 2) {
        return whichTurn === 'O' ? position + 1 : position - 1;
      }
      return position;
    }));
    console.log('numOfMoves before if statement', numOfMoves);
    console.log('numOfMoves after if statement', numOfMoves);
    // console.log('rows after', rows, 'columns after', columns);
  };

  useEffect(() => {
    if (numOfMoves >= 5) {
      let sum = 0;
      rightDiagonal.forEach((num) => {
        sum += num;
      });
      console.log('sum', sum);
      if (sum === 3 || sum === -3) {
        console.log('someone won dude');
        setGameWon(true);
      }
      sum = 0;
    }
    
    if (numOfMoves >= 5) {
      let sum = 0;
      leftDiagonal.forEach((num) => {
        sum += num;
      });
      if (sum === 3 || sum === -3) {
        setGameWon(true);
      }
      sum = 0;
    }
  }, [leftDiagonal, numOfMoves, rightDiagonal]);

  const squares = [];
  for (let i = 0; i < 9; i += 1) {
    squares.push(<Square
      key={i}
      id={i}
      coordinates={[Math.floor(i / 3), (i % 3)]}
      numOfMoves={numOfMoves}
      setNumOfMoves={setNumOfMoves}
      squaresContents={squaresContents}
      setSquaresContents={setSquaresContents}
      clearBoard={clearBoard}
      setClearBoard={setClearBoard}
      whichTurn={whichTurn}
      setWhichTurn={setWhichTurn}
      checkWin={checkWin}
    />)
  }

  const handleClear = () => {
    setClearBoard(true);
    setNumOfMoves(0);
    setRows(threeZeroArr);
    setColumns(threeZeroArr);
    setGameWon(false);
    setRightDiagonal(threeZeroArr);
    setLeftDiagonal(threeZeroArr);
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
          <p id='win'>
            {
              (
                numOfMoves >= 5
                  ? gameWon === true
                    ? `${whichTurn === 'X'
                      ? 'O'
                      : 'X'} wins.`
                    : numOfMoves === 9
                      ? `It's a draw.`
                      : ''
                : ''
              )
            }
          </p>
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
        {
          (
            numOfMoves === 9 || gameWon
            ? 'Click or tap clear to start a new game!'
            : 'Click or tap on the above board to play a move!'
          )
        }
      </p>
    </div>
  );
}

export default App;
