import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: "Autonomous Search Drones",
    description:
      "Stay hydrated with our stylish and sustainable water bottle. Made from recycled materials, it keeps your drinks cold for hours.",
    image: "/drone.png",
  },
  {
    id: 2,
    title: "ResQ's Mobile Application",
    description:
      "Control your entire home with our intuitive smart home hub. Compatible with all major smart devices for seamless integration.",
    image: "/mobileapp.png",
  },
];

const ProductCard = ({ product, index }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    // Slide up animation for images
    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Typewriter effect for titles
    const titleText = titleRef.current.innerText;
    titleRef.current.innerText = "";
    gsap.to(titleRef.current, {
      duration: 2,
      text: titleText,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row items-center mb-16 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/3 p-4" ref={imageRef}>
        <img
          src={product.image}
          alt={product.title}
          className="w-[80%] h-auto rounded-2xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-2/3 p-4">
        <p
          ref={titleRef}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-light to-accent font-suse bg-clip-text text-transparent"
        >
          {product.title}
        </p>
        <p className="text-lg text-light font-suse bg-gradient-to-br from-stone-200/10 to-transparent backdrop-blur-3xl rounded-3xl p-5">
          {product.description}
        </p>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="bg-dark">
      <div className="absolute z-50 start-0 top-0 m-10">
        <Link to="/">
          <span className="font-500 font-suse text-5xl font-bold text-light">
            {"↜"}
          </span>
        </Link>
      </div>
      <div className="relative container mx-auto px-4 py-16 ">
        <div className="absolute  start-0 -translate-x-1/4 top-1/4  -translate-y-1/2 z-0 bg-accent blur-[220px] h-[25rem] w-[25rem] rounded-full"></div>

        <div className="absolute  end-14 -translate-x-1/4 top-3/4  -translate-y-1/2 z-0 bg-accent blur-[300px] h-[25rem] w-[25rem] rounded-full"></div>
        <div className="z-10">
          <h1 className="text-7xl font-bold mb-12 text-center bg-gradient-to-b from-stone-500 via-stone-300 to-stone-500 bg-clip-text text-transparent font-suse ">
            Our{" "}
            <span className="font-500 font-playfair italic bg-gradient-to-r from-primary via-light to-accent bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
          <p className="text-center mt-5 font-playfair text-xl bg-gradient-to-b from-stone-500 via-stone-200 to-stone-500 bg-clip-text text-transparent">
            More coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
