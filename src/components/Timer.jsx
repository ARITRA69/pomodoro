import { BellOff } from "lucide-react";
import React from "react";

const Timer = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset,
}) => {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center text-white">
        {options.map((option, index) => {
          return (
            <h1
              className={`${
                index === stage ? "bg-[#D65A31]" : ""
              } bg-gray-900 h-[50px] w-[100px] flex justify-center items-center rounded-md cursor-pointer transition-all hover:bg-[#D65A31]`}
              key={index}
              onClick={() => switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none m-0 text-[#EEEEEE]">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="w-[150px] h-[50px] text-2xl rounded-md bg-[#393E46] text-white hover:text-[#D65A31] uppercase font-bold transition-all"
          onClick={startTimer}
        >
          {ticking ? "Stop" : "Start"}
        </button>
        {isTimeUp && (
          <BellOff
            className="text-3xl text-white cursor-pointer"
            onClick={muteAlarm}
          />
        )}
      </div>
      {ticking && (
        <button className="uppercase text-white mt-5" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Timer;
