import { useEffect, useState } from "react";
import heroBg from "../../assets/images/hero/hero-bg.jpg";
import starSvg from "../../assets/images/hero/star.svg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 " />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-serif font-light leading-tight">
          <span
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 transition-all duration-1000 ease-out"
            style={{
              opacity: 1 - scrollY / 300,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            Make Yourself stylish
          </span>
          <span
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 ease-out"
            style={{
              opacity: 1 - scrollY / 400,
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            with our products
          </span>
        </h1>
      </div>

      <img
        alt="star"
        fetchPriority="high"
        decoding="async"
        width="2000"
        height="2000"
        className="w-[80px] md:w-[100px] absolute bottom-0 left-0 opacity-60"
        style={{ color: "transparent" }}
        src={starSvg}
      />

      <img
        alt="star"
        fetchPriority="high"
        decoding="async"
        width="2000"
        height="2000"
        className="w-[80px] md:w-[100px] absolute bottom-0 right-0 opacity-60"
        style={{ color: "transparent" }}
        src={starSvg}
      />
    </section>
  );
};

export default Hero;
