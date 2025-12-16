import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import HeroSection from "../components/blog/HeroSection";
import Section1 from "../components/blog/Section1";
import Footer from "../components/blog/Footer";

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

    return (
        <div dir={direction} className="relative overflow-y-scroll bg-white">
            <HeroSection />
            <Section1 />
            <Footer />
        </div>
    );
}
