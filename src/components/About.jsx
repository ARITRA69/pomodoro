import {
  BellRing,
  CheckSquare,
  ClipboardList,
  Github,
  Timer,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="w-10/12 mx-auto mt-36 pt-5 text-[#EEEEEE]">
      <Link
        href="https://github.com/ARITRA69/pomodoro.git"
        className="flex items-center justify-center px-3 py-1 border border-opacity-0 hover:border-[#D65A31] duration-300 rounded-lg"
      >
        <Github color="#D65A31" />
        Source Code
      </Link>
      <div className="mt-6">
        <h1 className="text-xl sm:text-2xl font-medium">
          <span className="border-b-4 border-[#D65A31]">What</span> is Pomodoro?
        </h1>
        <p className="mt-5 tracking-wide opacity-70 text-lg">
          The pomodoro technique is a time management method that helps you
          focus on your tasks and avoid distractions.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-xl sm:text-2xl font-medium">
          <span className="border-b-4 border-[#D65A31]">How</span> does pomodoro
          work?
        </h1>
        <p className="mt-5 tracking-wider opacity-70 text-lg flex flex-col">
          <span className="flex gap-2">
            <ClipboardList color="#D65A31" /> Choose a task you want to work on.
          </span>
          <span className="flex gap-2 mt-2">
            <Timer color="#D65A31" /> Set a timer for 25 minutes and start
            working on the task.
          </span>
          <span className="flex gap-2 mt-2">
            <BellRing color="#D65A31" /> When the timer rings, stop working and
            take a 5-minute break.
          </span>
          <span className="flex gap-2 mt-2">
            <Utensils color="#D65A31" />
            After four pomodoros, take a longer break of 15 to 30 minutes.
          </span>
          <span className="flex gap-2 mt-2">
            <CheckSquare color="#D65A31" />
            Repeat the process until you finish the task or reach your goal.
          </span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(About);
