import React, { useState, useEffect } from 'react';

const Square = (props) => {
  const handleClick = () => {
    const { whichTurn, setWhichTurn } = props;
    setSquareContent(whichTurn);
    setWhichTurn(whichTurn === 'O' ? 'X' : 'O');
  };

  const { clearBoard, setClearBoard } = props;
  const [ squareContent, setSquareContent ] = useState('');
  useEffect(() => {
    setSquareContent('');
    setClearBoard(false);
  }, [ clearBoard, setClearBoard ])

  return (
    <div className='board-square' onClick={handleClick}>
      <div className='square-contents'>{squareContent}</div>
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