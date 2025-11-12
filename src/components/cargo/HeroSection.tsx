import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Menu, X } from "lucide-react";

const HeroSection: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen((prev) => {
            const newState = !prev;
            if (newState) setIsLanguagesOpen(false);
            return newState;
        });
    };

    const toggleLanguages = () => {
        setIsLanguagesOpen((prev) => {
            const newState = !prev;
            if (newState) setIsServicesOpen(false);
            return newState;
        });
    };

    return (
        <section className="clip-bottom-shape scroll-y-hidden relative h-[calc(100vh+40px)] w-full overflow-hidden font-stan">
            {/* Background video */}
            <video
                className="absolute left-0 top-0 h-full w-full object-cover"
                src="/cargo/herosection/background.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Top Navbar */}
            <div className="absolute left-0 top-0 z-30 w-full px-4 py-4 md:px-14 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <img
                        src="/cargo/herosection/cargo_logo.svg"
                        alt="Cargo Logo"
                        className="h-8 w-auto sm:h-10 md:h-12"
                    />

                    {/* Desktop Navigation */}
                    <nav className="hidden flex-wrap items-center justify-center gap-4 rounded-full bg-black/20 px-8 py-2 text-xs text-white sm:text-sm md:flex md:gap-8 md:px-8">
                        <a
                            href="/cargo"
                            className="font-manrope transition hover:text-[#00B9EC]"
                        >
                            Home
                        </a>

                        <div className="group relative">
                            <button
                                onClick={toggleServices}
                                className="flex items-center gap-1 font-manrope hover:text-[#00B9EC]"
                            >
                                Services
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        isServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isServicesOpen && (
                                <div className="absolute top-full z-50 mt-5 w-[350px] bg-white/20 px-2 py-5 backdrop-blur-md">
                                    <h3 className="mb-4 pl-4 text-base text-white">
                                        All Services
                                    </h3>
                                    <ul className="space-y-3 font-stan text-[13px] font-light text-gray-200">
                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>Residential Moves</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>Commercial Relocations</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>
                                                Long-Distance & International
                                                Moves
                                            </span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>
                                                Expedited Freight Services
                                            </span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>Expert Packing Services</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>
                                                Return & Reverse Logistics
                                            </span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>
                                                Heavy Haul & Oversized Loads
                                            </span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <a
                            href="/"
                            className="font-manrope transition hover:text-[#00B9EC]"
                        >
                            Blogs
                        </a>

                        {/* Language dropdown (same as before) */}
                        <div className="group relative">
                            <button
                                onClick={toggleLanguages}
                                className="flex items-center gap-1 font-manrope hover:text-[#00B9EC]"
                            >
                                Language
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        isLanguagesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isLanguagesOpen && (
                                <div className="absolute top-full z-50 mr-24 mt-3 w-[200px] bg-white/20 px-5 py-4 backdrop-blur-sm">
                                    <ul className="space-y-1 font-stan text-gray-200">
                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>English</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white">
                                            <span>العربية</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                const target =
                                    document.getElementById("quote-section");
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="rounded-full bg-[#00B9EC] px-5 py-2 font-manrope text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-3"
                        >
                            GET A QUOTE
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="mt-4 flex flex-col gap-4 rounded-md bg-black/40 px-4 py-4 text-white backdrop-blur-md md:hidden">
                        <a
                            href="/"
                            className="font-manrope hover:text-[#00B9EC]"
                        >
                            Home
                        </a>
                        <button
                            onClick={toggleServices}
                            className="flex items-center justify-between font-manrope hover:text-[#00B9EC]"
                        >
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isServicesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isServicesOpen && (
                            <div className="ml-4 space-y-2 font-stan text-gray-200">
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Residential Moves
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Commercial Relocations
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Long-Distance & International Moves
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Expedited Freight Services
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Expert Packing Services
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Return & Reverse Logistics
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    Heavy Haul & Oversized Loads
                                </a>
                            </div>
                        )}
                        <a
                            href="/"
                            className="font-manrope hover:text-[#00B9EC]"
                        >
                            Blogs
                        </a>
                        <button
                            onClick={toggleLanguages}
                            className="flex items-center justify-between font-manrope hover:text-[#00B9EC]"
                        >
                            Language
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isLanguagesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isLanguagesOpen && (
                            <div className="ml-4 space-y-2 font-stan text-gray-200">
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    English
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                >
                                    العربية
                                </a>
                            </div>
                        )}

                        <button
                            onClick={() => {
                                const target =
                                    document.getElementById("quote-section");
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="mt-2 rounded-full bg-[#00B9EC] px-5 py-2 font-manrope text-white transition hover:bg-white hover:text-black"
                        >
                            GET A QUOTE
                        </button>
                    </div>
                )}
            </div>

            {/* Center Hero Text */}
            <div className="absolute inset-0 z-20 mb-20 flex flex-col-reverse items-center justify-center gap-6 px-24 text-center font-stan text-white sm:flex-row sm:justify-between sm:px-14 sm:text-left">
                <h1 className="font-stan text-3xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block leading-[1.2]">YOUR GLOBAL</span>
                    <span className="block leading-[1.2]">FREIGHT PARTNER</span>
                    <span className="block leading-[1.2]">— RELIABLE,</span>
                    <span className="block leading-[1.2]">
                        EFFICIENT, ON TIME
                    </span>
                </h1>

                <div className="flex flex-row items-center space-y-0 sm:flex-col sm:items-end">
                    {/* App Store */}
                    <div className="border-1-white m-4 border bg-black/50 bg-transparent transition hover:border-[#00B9EC]">
                        <img
                            src="/cargo/appstore_logo.svg"
                            alt="App Store"
                            className="h-12 w-auto cursor-pointer p-2 backdrop-blur-md"
                        />
                    </div>

                    {/* Play Store */}
                    <div className="border-1-white m-4 border bg-black/50 bg-transparent transition hover:border-[#00B9EC]">
                        <img
                            src="/cargo/playstore_logo.svg"
                            alt="Play Store"
                            className="h-12 w-auto cursor-pointer p-2 backdrop-blur-md"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="absolute bottom-6 left-0 z-30 mb-16 flex w-full flex-col items-center justify-center gap-4 px-8 text-center font-manrope sm:flex-row sm:justify-between sm:px-14 sm:text-left">
                <div className="w-max-xl flex flex-col items-start space-x-32 font-stan text-sm font-light text-white sm:flex-row sm:text-base md:text-lg">
                    <span>
                        We provide comprehensive domestic and international{" "}
                        <br className="hidden sm:block" />
                        logistics services, delivering customized solutions by
                        <br className="hidden sm:block" /> land, sea, and air.
                    </span>
                    <button
                        onClick={() => {
                            const target =
                                document.getElementById("quote-section");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="relative mt-4 rounded-full border border-white bg-transparent px-5 py-2 text-xs text-white transition hover:border-transparent hover:bg-[#00B9EC] sm:px-8 sm:py-3"
                    >
                        GET A QUOTE{" "}
                        <img
                            src="/cargo/herosection/right_arrow.svg"
                            alt="arrow"
                            className="ml-2 inline-block h-4 w-4"
                        />
                    </button>
                </div>

                <div className="flex justify-center sm:justify-end">
                    <img
                        src="/cargo/herosection/whatsapp_logo.svg"
                        alt="Whatsapp"
                        className="h-10 w-auto cursor-pointer transition-transform hover:scale-105 sm:h-12 md:h-14"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
