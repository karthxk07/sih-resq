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
      "Our cutting-edge autonomous drones represent a revolutionary leap in search and rescue technology. These unmanned aerial vehicles are programmed to navigate predefined flight paths with precision, covering vast and often inaccessible terrains efficiently. Equipped with state-of-the-art camera sensors and advanced thermal imaging technology, these drones are capable of detecting human presence even in the most challenging conditions. The high-resolution cameras provide real-time visual data, while the thermal sensors can identify heat signatures, allowing for effective searches day or night, and in various weather conditions. By combining autonomous navigation with multi-spectral sensing capabilities, our drones significantly enhance the speed and accuracy of search operations, potentially saving crucial time in life-threatening situations. Whether it's locating missing hikers in dense forests, identifying survivors in disaster-stricken areas, or assisting in maritime rescue missions, these drones serve as tireless, airborne allies in the critical task of safeguarding human lives.",
    image: "/drone.png",
  },
  {
    id: 2,
    title: "ResQ's Mobile Application",
    description:
      "ResQ's cutting-edge mobile application serves as a crucial link between advanced flood prediction technology and the communities at risk. This user-friendly app harnesses the power of real-time data analytics and machine learning algorithms to provide early warnings for potential flood events. By integrating multiple data sources, including weather forecasts, river levels, and historical flooding patterns, the app offers highly accurate predictions with unprecedented lead times. Users receive timely, location-specific alerts directly on their smartphones, allowing for proactive preparation and evacuation if necessary. The app's intuitive interface presents complex data in easily understandable formats, including interactive maps, risk level indicators, and personalized safety recommendations. Beyond alerts, the application serves as a comprehensive flood management tool, offering features such as evacuation route guidance, emergency contact information, and community support networks. By bridging the gap between cutting-edge prediction models and on-the-ground action, ResQ's mobile application empowers individuals and communities to stay one step ahead of flood risks, potentially saving lives and minimizing property damage in flood-prone areas.",
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
        <p className="text-lg text-light m-3 font-suse bg-gradient-to-br from-stone-200/10 to-transparent backdrop-blur-3xl rounded-3xl p-5">
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
