import React from "react";
import CountdownTimer from "./Components/CountdownComponent";
import TopBar from "./Components/Topbar";

export default () => (
  <>
    <div className="bg-dark   h-screen w-full relative">
      <div className="absolute  start-0 -translate-x-1/4 top-1/4  -translate-y-1/2 z-50 bg-accent blur-[220px] h-[25rem] w-[25rem] rounded-full"></div>

      <div className="absolute  end-14 -translate-x-1/4 top-3/4  -translate-y-1/2 z-50 bg-accent blur-[300px] h-[25rem] w-[25rem] rounded-full"></div>
      <div className="absolute start-1/2 -translate-x-1/2 w-full top-0 mt-5 z-0">
        <TopBar />
      </div>
      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-row w-[80%] justify-around">
        <div className=" w-1/3 p-10 object-contain overflow-clip mr-20">
          <img src="/resq.png" alt="" className="rounded-2xl" />
        </div>

        <div className="m-10 text-center">
          <p className="text-transparent font-playfair italic  text-[11rem] bg-gradient-to-r from-primary to-80% to-dark via-accent bg-clip-text ">
            Res
            <span className="bg-gradient-to-b bg-clip-text from-stone-500 via-stone-200 to-stone-600 shadow-lg text-transparent not-italic">
              Q
            </span>
          </p>
          <p className="text-transparent bg-gradient-to-r from-accent to-light bg-clip-text font-playfair mb-3 text-[20px]">
            We're coming soon
          </p>
          <p>
            <CountdownTimer
              targetDate={new Date("2024-09-10T00:00:00").getTime()}
            />
          </p>
        </div>
      </div>
    </div>
  </>
);
