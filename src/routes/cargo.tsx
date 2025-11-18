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
            setShowTopButton(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const direction = i18n.language === "ar" ? "rtl" : "ltr";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            dir={direction}
            className="scrollbar-hide relative overflow-y-scroll bg-white"
        >
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
                    className="fixed bottom-8 right-16 z-50 hover:scale-110 transition-transform"
                    aria-label="Back to top"
                >
                    <svg
                        width="52"
                        height="52"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_577_33167)">
                            <rect
                                x="4"
                                width="64"
                                height="64"
                                rx="32"
                                fill="#00B9EC"
                            />
                            <path
                                d="M35.9998 24.5788L22.9839 37.5947L24.8322 39.4429L29.2836 34.9655L35.9998 28.2493L42.716 34.9655L47.1674 39.4169L49.0156 37.5687L35.9998 24.5788Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_577_33167"
                                x="0"
                                y="0"
                                width="72"
                                height="72"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_577_33167"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_577_33167"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </button>
            )}
        </div>
    );
}
