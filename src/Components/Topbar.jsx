import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const TopBar = () => {
  const topBarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(topBarRef.current, { borderRadius: "20px 20px 20px 20px" });

    tl.to(topBarRef.current, {
      width: "70%",
      ease: "sine.inOut",
    });

    tl.to("#listItem", {
      display: "block",
      translateY: "0",
      ease: "power2.inOut",
      opacity: 1,
      duration: 0.5,
    });

    //     .to(logoRef.current, { opacity: 0, duration: 0.3 }, "-=0.3")
    //     .to(
    //       topBarRef.current,
    //       { padding: "1rem", ease: "power2.inOut" },
    //       "-=0.2"
    //     );
    // } else {
    //   tl.to(topBarRef.current, {
    //     width: "60px",
    //     borderRadius: "50%",
    //     ease: "power2.inOut",
    //   })
    //     .to(logoRef.current, { opacity: 1, duration: 0.3 }, "-=0.3")
    //     .to(topBarRef.current, { padding: "0", ease: "power2.inOut" }, "-=0.2");
    // }
  }, []);

  return (
    <div
      ref={topBarRef}
      className="backdrop-blur-3xl shadow-inner bg-gradient-to-r from-stone-500/10 to-transparent mx-auto flex items-center justify-center cursor-pointer w-fit rounded-full p-3 font-suse font-500 font-semibold text-lg "
    >
      <div className="w-full flex flex-row justify-around h-11 ">
        <div className="overflow-hidden ">
          <a
            href="#"
            id="listItem"
            className="text-accent py-2 hover:underline hidden  translate-y-full "
          >
            Home
          </a>
        </div>
        <div className="overflow-hidden">
          <a
            href="#"
            id="listItem"
            className="text-accent py-2 hover:underline hidden  translate-y-full"
          >
            <Link to="drone">Drone</Link>
          </a>
        </div>
      </div>
      <img
        ref={logoRef}
        src="/logo.png" // Replace with your logo path
        alt="Logo"
        className="w-10 h-10"
      />
      <div className="w-full flex flex-row justify-around h-11">
        <div className="overflow-hidden">
          <a
            id="listItem"
            className="text-light py-2 hover:underline hidden  translate-y-full "
          >
            <Link to="/map">Map</Link>
          </a>
        </div>
        <div className="overflow-hidden">
          <a
            id="listItem"
            className="text-light py-2 hover:underline hidden  translate-y-full"
          >
            <Link to="products">Products</Link>
          </a>
        </div>
      </div>
      {/* <nav className="flex flex-col items-start ml-4">
        <a href="#" className="text-white py-2 hover:underline">
          Home
        </a>
        <a href="#" className="text-white py-2 hover:underline">
          About
        </a>
        <a href="#" className="text-white py-2 hover:underline">
          Services
        </a>
        <a href="#" className="text-white py-2 hover:underline">
          Contact
        </a>
      </nav> */}
    </div>
  );
};

export default TopBar;
