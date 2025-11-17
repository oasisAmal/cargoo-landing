import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import HeroSection from "../components/cargo/HeroSection";
import Section1 from "../components/cargo/Section1";
import Section2 from "../components/cargo/Section2";
import Section3 from "../components/cargo/Section3";
import Section4 from "../components/cargo/Section4";
import Section5 from "../components/cargo/Section5";
import Section6 from "../components/cargo/Section6";
import Section7 from "../components/cargo/Section7";
import Section8 from "../components/cargo/Section8";
import Section9 from "../components/cargo/Section9";
import Section10 from "../components/cargo/Section10";
import Section11 from "../components/cargo/Section11";
import Footer from "../components/cargo/Footer";

export default function Cargo() {
  const [showTopButton, setShowTopButton] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div dir={direction} className="scrollbar-hide overflow-y-scroll bg-[#f2f2f2] relative">

      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-12 z-50 rounded-full bg-[#00B9EC] p-4 shadow-lg hover:bg-[#0095c1] transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

    </div>
  );
}
