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
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  // 1. 次が X かどうかを管理する State を追加（初期値は true）
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  function handleClick(i: number) {
    // すでに値が入っている場合は、何もしない（上書き禁止）
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    
    // 2. xIsNext の値によって "X" か "O" を入れる
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    // 3. ターンを交代させる
    setXIsNext(!xIsNext);
  }

  // 4. 次のプレイヤーを表示するメッセージ
  const status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="p-10">
      <div className="mb-4 text-xl font-bold">{status}</div> {/* ステータス表示を追加 */}
      <div className="grid grid-cols-3 w-30">
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
