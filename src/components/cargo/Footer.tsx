import React from "react";

const Footer: React.FC = () => {
    return (
        <footer
            className="relative overflow-hidden bg-[#2C2F33] py-10 pt-16 font-stan text-gray-300 md:px-20 sm:mt-[-2rem]"
            style={{
                clipPath:
                    "polygon(100% 0px, 62% 0px, 60% 5%, 0px 5%, 0px 100%, 100% 100%)",
            }}
        >
            {/* --- Logo --- */}
            <div className="mb-10 flex w-full items-center justify-center md:items-center md:justify-start">
                <img
                    src="/cargo/herosection/cargo_logo.svg"
                    alt="CARGO Logo"
                    className="mb-4 h-12 sm:h-14 md:h-16"
                />
            </div>

            {/* --- Main Grid --- */}
            <div className="container grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start md:gap-16 md:pr-80">
                {/* Left Section - Store Logos */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex flex-wrap justify-center gap-4">
                        <img
                            src="/cargo/appstore_logo.svg"
                            alt="App Store"
                            className="h-10 w-auto cursor-pointer border border-white/50 p-2 backdrop-blur transition hover:border-white sm:h-12"
                        />
                        <img
                            src="/cargo/playstore_logo.svg"
                            alt="Play Store"
                            className="h-10 w-auto cursor-pointer border border-white/50 p-2 backdrop-blur transition hover:border-white sm:h-12"
                        />
                    </div>
                </div>

                {/* Middle Section - About */}
                <div className="flex flex-col items-center text-center font-manrope md:items-start md:text-left">
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                        About US
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>
                            <a href="#" className="hover:text-white">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section - Contact */}
                <div className="flex flex-col items-center text-center font-manrope md:items-start md:text-left">
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                        Contact Details
                    </h3>
                    <p className="text-sm leading-relaxed sm:text-base">
                        Abu Dhabi City – Al Salam Street “Al Firdous Tower”
                        <br />
                        Abu Dhabi, UAE
                    </p>
                    <p className="mt-3 text-sm sm:text-base">+971 2 673 3346</p>
                    <p className="mt-1 text-sm sm:text-base">
                        info@3CARGO.com
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-600"></div>

            {/* Bottom text */}
            <div className="space-x-2 text-center text-sm text-gray-400 sm:text-base">
                <span className="cursor-pointer hover:text-white">Imprint</span>
                <span>|</span>
                <span className="cursor-pointer hover:text-white">
                    Privacy policy
                </span>
            </div>

            {/* Background watermark */}
            <img
                src="/cargo/section3/map_pin.svg"
                alt="Background shape"
                className="absolute bottom-[-250px] right-[-200px] w-[250px] opacity-30 sm:w-[350px] md:w-[500px] lg:w-[700px] md:opacity-100"
            />
        </footer>
    );
};

export default Footer;
