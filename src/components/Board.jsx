import Square from './Square';

const Board = ({ isNext, squares, onPlay, calculateWinner }) => {
  const clickSquare = (i) => {
    if (squares[i] || calculateWinner(squares)) return;

    const updateSquare = squares.slice();

    if (isNext) {
      updateSquare[i] = 'X';
    } else {
      updateSquare[i] = 'O';
    }
    onPlay(updateSquare);
  };

  let status;
  const winner = calculateWinner(squares);

  if (winner) {
    status = 'Игра окончена! Победитель: ' + winner;
  } else {
    if (squares.every((el) => el === 'X' || el === 'O')) {
      status = 'Игра окончена! Ничья!';
    } else {
      status = 'Следующий игрок: ' + (isNext ? 'X' : 'O');
    }
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onClick={() => clickSquare(0)} />
        <Square value={squares[1]} onClick={() => clickSquare(1)} />
        <Square value={squares[2]} onClick={() => clickSquare(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onClick={() => clickSquare(3)} />
        <Square value={squares[4]} onClick={() => clickSquare(4)} />
        <Square value={squares[5]} onClick={() => clickSquare(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onClick={() => clickSquare(6)} />
        <Square value={squares[7]} onClick={() => clickSquare(7)} />
        <Square value={squares[8]} onClick={() => clickSquare(8)} />
      </div>
    </>
  );
};

export default Board;
