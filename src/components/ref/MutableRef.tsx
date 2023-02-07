import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = (): void => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="mb-2 flex justify-center gap-4">
      HookTimer - {timer}
      <button
        className="h-[2.5rem] w-[8rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={() => stopTimer()}
      >
        Stop Timer
      </button>
    </div>
  );
};
