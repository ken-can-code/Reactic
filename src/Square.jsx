import React, { useEffect } from 'react';

const Square = (props) => {
  const {
    checkWin,
    coordinates,
    numOfMoves,
    setNumOfMoves,
    squaresContents,
    setSquaresContents,
    clearBoard,
    setClearBoard,
    id
  } = props;

  const handleClick = () => {
    if (squaresContents[id] === '') {
      setNumOfMoves(numOfMoves + 1);
      const { whichTurn, setWhichTurn } = props;
      const newSquaresContents = [];
      for (let i = 0; i < 9; i += 1) {
        if (id === i) {
          newSquaresContents.push(whichTurn);
        } else {
          newSquaresContents.push(squaresContents[i]);
        }
      }
      checkWin(coordinates);
      setSquaresContents(newSquaresContents);
      setWhichTurn(whichTurn === 'O' ? 'X' : 'O');
    }
  };

  useEffect(() => {
    const blankBoardArray = [];
    for (let i = 0; i < 9; i += 1) {
      blankBoardArray.push('');
    }
    setSquaresContents(blankBoardArray);
    setClearBoard(false);
  }, [clearBoard, setClearBoard, setNumOfMoves, setSquaresContents])

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