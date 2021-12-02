import React, { useState } from 'react';

const Square = (props) => {
  const handleClick = () => {
    const { whichTurn, setWhichTurn } = props;
    setSquareContent(whichTurn);
    setWhichTurn(whichTurn === 'O' ? 'X' : 'O');
  };

  const [squareContent, setSquareContent] = useState('');

  return (
    <div className='board-square' onClick={handleClick}>
      <div className='square-contents'>{squareContent}</div>
    </div>
  )
}

export default Square;