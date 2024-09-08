import React, { useEffect } from "react";
import CountdownTimer from "./Components/CountdownComponent";
import TopBar from "./Components/Topbar";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import "./app.css";

export default () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to("#text", { duration: 0.7, text: "Res" });
    tl.to("#button", { width: "100%" }, "<");
    tl.to("#button2", { width: "100%" }, "<");
    tl.to("#innerText", { duration: 0.1, text: "Q" }, "<");
    tl.to("#cursor", { duration: 0.5, text: "." }, "<");
    tl.to("#button", { text: "About", duration: 0.7 }, "<0.2");
    tl.to("#button2", { text: "Products", duration: 0.7 }, "<0.2");
  }, []);
  return (
    <>
      <div className="bg-dark   h-screen w-full relative">
        <div className="absolute  start-0 -translate-x-1/4 top-1/4  -translate-y-1/2 z-0 bg-accent blur-[220px] h-[25rem] w-[25rem] rounded-full"></div>

        <div className="absolute  end-14 -translate-x-1/4 top-3/4  -translate-y-1/2 z-0 bg-accent blur-[300px] h-[25rem] w-[25rem] rounded-full"></div>
        <div className="absolute start-1/2 -translate-x-1/2 w-full top-0 mt-5 z-0">
          <TopBar />
        </div>
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-row w-[80%] justify-around">
          <div className=" w-1/2 p-10 object-contain overflow-clip mr-20">
            <img src="/resq.png" alt="" className="rounded-2xl" />
          </div>

          <div className="m-10 text-center w-1/2">
            <p className="text-transparent font-playfair italic  text-[11rem] bg-gradient-to-r from-primary to-80% to-dark via-accent bg-clip-text ">
              <span id="text"></span>
              <span
                id="innerText"
                className="bg-gradient-to-b bg-clip-text from-stone-500 via-stone-200 to-stone-600 shadow-lg text-transparent not-italic"
              ></span>
              <span
                id="cursor"
                className="bg-gradient-to-b bg-clip-text from-stone-500 via-stone-200 to-stone-600 shadow-lg text-transparent not-italic"
              >
                |
              </span>
            </p>
            <p className="text-transparent bg-gradient-to-r from-accent to-light bg-clip-text font-playfair mb-3 text-[15px]">
              We're coming soon with our first prototypes
            </p>
            <p>
              <CountdownTimer
                targetDate={new Date("2024-09-15T00:00:00").getTime()}
              />
            </p>
            <div className="flex flex-row mt-8">
              <div className="w-1/2 shadow-inner bg-gradient-to-br from-stone-300/10 to-transparent backdrop-blur-xl rounded-2xl min-h-52">
                <p className="text-justify p-3 text-light font-suse">
                  <span className="bg-gradient-to-r font-playfair italic text-xl from-accent to-light bg-clip-text text-transparent">
                    ResQ
                  </span>{" "}
                  offers a three-fold approach to natural disaster relief and
                  management through its innovative{" "}
                  <span className="text-xl text-primary font-playfair italic">
                    P
                  </span>
                  revention,
                  <span className="text-xl text-primary font-playfair italic">
                    {" "}
                    A
                  </span>
                  lert, and
                  <span className="text-xl text-primary font-playfair italic">
                    {" "}
                    R
                  </span>
                  escue{" "}
                  <span className="text-lg italic font-playfair text-secondary">
                    {" "}
                    (PAR){" "}
                  </span>
                  system. This comprehensive solution leverages advanced
                  technology to safeguard communities and minimize the impact of
                  natural calamities.
                </p>
              </div>
              <div className="flex-col flex flex-grow p-5 gap-y-10 items-center ">
                <a
                  class="relative"
                  href="#"
                  className=" relative w-full flex-grow"
                >
                  <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                  <span
                    id="button"
                    class="fold-bold font-playfair italic justify-center items-center   relative flex h-full w-0 overflow-hidden rounded border-2 border-black bg-light px-3 py-1 text-xl font-bold text-black transition duration-300 ease-in-out hover:bg-dark hover:text-light hover:-translate-x-0 hover:-translate-y-0 -translate-x-2 -translate-y-2"
                  >
                    |
                  </span>
                </a>
                <a
                  class="relative"
                  href="#"
                  className=" relative w-full flex-grow"
                >
                  <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                  <span
                    id="button2"
                    class="fold-bold font-playfair italic justify-center items-center   relative flex h-full w-0 overflow-hidden rounded border-2 border-black bg-light px-3 py-1 text-xl font-bold text-black transition duration-300 ease-in-out hover:bg-dark hover:text-light hover:-translate-x-0 hover:-translate-y-0 -translate-x-2 -translate-y-2"
                  >
                    |
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
