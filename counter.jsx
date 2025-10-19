import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Counter App
        </h1>
        
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-indigo-600 mb-2">
            {count}
          </div>
          <p className="text-gray-500 text-sm">Current Count</p>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            - Decrease
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            + Increase
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
