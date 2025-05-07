'use client';

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🔢 My Updated Counter Demo</h1>
      <p className="text-2xl mb-6">Count: {count}</p>
      <div className="flex gap-4">
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
