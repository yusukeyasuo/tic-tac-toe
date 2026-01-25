// app/page.tsx
'use client';

import { useState } from 'react';

// Square は「値」と「クリックされた時の関数」を親から受け取るだけにする
function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
  return (
    <button 
      className="w-10 h-10 border border-gray-400 text-xl font-bold bg-white hover:bg-gray-100"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  // 1. 9個のマス目の状態を一つの配列で管理する
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

  function handleClick(i: number) {
    // 2. 配列をコピーして、クリックされた場所だけ書き換える（イミュータブルな更新）
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-3 w-30">
        {/* 3. 各 Square に値と実行してほしい関数を渡す（Props） */}
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