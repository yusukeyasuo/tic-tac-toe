// app/page.tsx
'use client';

import { useState } from 'react';

function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
  return (
    <button 
      // text-black を追加して文字を真っ黒に、w-12 h-12 で少し大きくしました
      className="w-12 h-12 border-2 border-gray-600 text-2xl font-bold bg-white text-black hover:bg-gray-200 flex items-center justify-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  function handleClick(i: number) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    // min-h-screen と bg-white で画面全体を白背景に固定し、text-black で文字を濃くします
    <div className="min-h-screen bg-white p-10 text-black">
      <div className="mb-4 text-2xl font-extrabold">{status}</div>
      <div className="grid grid-cols-3 w-36">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}