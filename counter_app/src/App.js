import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrementHandler() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function incrementHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center  flex-col gap-10 bg-[#0f1e30]">
      <div className="text-2xl font-medium text-[#64bfe4]">Increment and Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-lg text-[25px] text-[#344151]">
        <button onClick={decrementHandler} className="text-center border-r-2 w-20 text-5xl border-[#bfbfbf]">
          -
        </button>
        <div className="font-bold text-5xl gap-12">
          {count}
        </div>
        <button onClick={incrementHandler} className="text-center border-l-2 w-20 text-5xl border-[#bfbfbf]">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="text-white px-5 py-2 rounded-sm text-lg bg-[#0398d4]">Reset</button>
    </div>
  );
}

export default App;
