import { Clock, Cog } from "lucide-react";
import React from "react";

function Navbar({ setOpenSetting }) {
  return (
    <nav className="pt-5 text-[#EEEEEE] flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer">
        <Clock size={20} />
        <h1 className="">Pomodoro</h1>
      </div>
      <Cog
        className="cursor-pointer"
        size={30}
        onClick={() => setOpenSetting((value) => !value)}
      />
    </nav>
  );
}

export default React.memo(Navbar);
