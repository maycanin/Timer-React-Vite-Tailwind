import { useEffect, useState } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

function App() {
  const [time, setTime] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    let handler: number;
    if (active) {
      handler = setInterval(() => {
        setTime((value) => value + 1);
      }, 1000);
    }
    return () => clearInterval(handler);
  }, [active]);

  function play() {
    setActive(!active);
  }

  function reset() {
    setActive(false);
    setTime(0);
  }

  return (
    <div className="flex flex-col w-screen h-screen text-center items-center justify-center bg-zinc-900">
      <h1 className="text-5xl font-bold text-white">Timer Cronômetro</h1>

      <div className="p-3 flex gap-2 flex-row items-center">
        <span className="bg-zinc-500 text-white rounded-lg px-4 text-3xl">
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
        </span>
        <span className="text-4xl pb-3 text-white font-bold">:</span>
        <span className="bg-zinc-500 text-white rounded-lg px-4 text-3xl">
          {(time % 60).toString().padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <button
          onClick={play}
          className="px-8 rounded-lg bg-green-700 border-none text-white font-bold hover:bg-green-500"
        >
          {active ? (
            <p className="flex gap-2 items-center">
              <FaPause />
              Pause
            </p>
          ) : (
            <p className="flex gap-2 items-center">
              <FaPlay />
              Start
            </p>
          )}
        </button>
        <button
          onClick={reset}
          className="px-8 rounded-lg bg-red-700 border-none text-white font-bold hover:bg-red-300"
        >
          <p className="flex gap-2 items-center">
            <FaStop /> Reset
          </p>
        </button>
      </div>
    </div>
  );
}

export default App;
