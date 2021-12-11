import React, { useState, useEffect } from 'react';

const Square = (props) => {
  const handleClick = () => {
    if (squaresContents[id] === '') {
      const { whichTurn, setWhichTurn } = props;
      const newSquaresContents = [];
      for (let i = 0; i < 9; i += 1) {
        if (id === i) {
          newSquaresContents.push(whichTurn);
        } else {
          newSquaresContents.push(squaresContents[i]);
        }
      }
      setSquaresContents(newSquaresContents);
      setWhichTurn(whichTurn === 'O' ? 'X' : 'O');
    }
  };

  const {
    blankBoardArray,
    squaresContents,
    setSquaresContents,
    clearBoard,
    setClearBoard,
    id
  } = props;

  useEffect(() => {
    setSquaresContents(blankBoardArray);
    setClearBoard(false);
  }, [blankBoardArray, clearBoard, setClearBoard, setSquaresContents])

  return (
    <div className='board-square' onClick={handleClick}>
      <div className='square-contents'>{squaresContents[id]}</div>
    </div>
  )
}

export default Square;




// React {
//   useState: function(whatever) {does something},
//   useEffect: function(something) {does something else}
// }

// props {
//   clearBoard: (the clearBoard state)
//   setClearBoard: (the setClearBoard function)
// }