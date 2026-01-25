// app/page.tsx
'use client';

import { useState } from 'react'; // 1. 追加：状態を管理するための道具をインポート

function Square() {
  // 2. 追加：value という変数と、それを更新する setValue という関数を作る
  // 最初 (useState の中身) は null にしておく
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X'); // 3. クリックされたら X を入れる
  }

  return (
    <button 
      className="w-10 h-10 border border-gray-400 text-xl font-bold bg-white hover:bg-gray-100"
      onClick={handleClick} // 4. クリックイベントを設定
    >
      {value} {/* 5. 変数の中身を表示する */}
    </button>
  );
}

export default function Board() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 w-30">
        <Square /><Square /><Square />
        <Square /><Square /><Square />
        <Square /><Square /><Square />
      </div>
    </div>
  );
}