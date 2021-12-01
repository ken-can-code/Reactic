import './App.css';
import Square from './Square';

function App() {
  return (
    <div className="App">
      <p className='section-title'>Tic Tac Toe</p>
      <div className='board-area'>
        <div className='board-left'></div>
        <div className='board-main'>
          <div className='board'>
            <Square />
            <div className='board-square' id='square2'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square3'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square4'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square5'>
              <div className='square-contents'> </div>
            </div>
            <div className='board-square' id='square6'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square7'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square8'>
              <div className='square-contents'></div>
            </div>
            <div className='board-square' id='square9'>
              <div className='square-contents'></div>
            </div>
          </div>
        </div>
        <div className='board-right'>
          <p id='win'></p>
        </div>
      </div>
      <div className='instruction-area'>
        <div id='left-child'></div>
        <p id='next-message'>
          Next move: <p id='current-turn'></p>
        </p>
        <div className='btn'>
          <button id='clear'>Clear</button>
        </div>
      </div>
      <p className='under-text' id='click-or-tap'>
        Click or tap on the above board to play a move!
      </p>
      <script src='index.js'></script>
    </div>
  );
}

export default App;
