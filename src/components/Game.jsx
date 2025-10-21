import { useState } from 'react';
import Board from './Board';

const Game = ({ calculateWinner }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isNext, setIsNext] = useState(true);
  const curentSquares = history[history.length - 1];

  function handlePlay(updateSquare) {
    setIsNext(!isNext);
    setHistory([...history, updateSquare]);
  }

  return (
    <Board
      isNext={isNext}
      squares={curentSquares}
      onPlay={handlePlay}
      calculateWinner={calculateWinner}
    />
  );
};

export default Game;
