import React from "react";

const logos = [
    "/cargo/section10/section10_partner1.svg",
    "/cargo/section10/section10_partner2.svg",
    "/cargo/section10/section10_partner3.svg",
    "/cargo/section10/section10_partner4.svg",
    "/cargo/section10/section10_partner5.svg",
    "/cargo/section10/section10_partner6.svg",
    "/cargo/section10/section10_partner7.svg",
    "/cargo/section10/section10_partner8.png",
    "/cargo/section10/section10_partner9.png",
    "/cargo/section10/section10_partner10.png",
];

const Section10: React.FC = () => {
    return (
        <section
            style={{
                clipPath:
                    "polygon(0 0, 59% 0, 62% 5%, 100% 5%, 100% 100%, 0 100%)",
            }}
            className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-white font-stan"
        >
            {/* Title */}
            <span className="block h-32 w-full bg-white"></span>
            <p className="mb-8 flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] sm:text-sm">
                <img
                    src="/cargo/herosection/right_arrow_color.svg"
                    alt="colored arrow"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                />
                TRUSTED BY
            </p>
            <p className="mb-10 pb-16 text-xl font-bold text-gray-900 sm:text-3xl">
                OUR PARTNERS
            </p>

            {/* Scrolling Logos */}
            <div className="relative w-full overflow-hidden">
                <div className="animate-scrollLeft flex w-max">
                    {[...logos, ...logos].map((logo, i) => (
                        <img
                            key={`logo-${i}`}
                            src={logo}
                            alt={`partner-${i}`}
                            className="sm:h-18 mx-10 h-16 w-auto object-contain opacity-80 transition hover:opacity-100 md:h-20 lg:h-24"
                        />
                    ))}
                </div>
            </div>
            <span className="block h-32 w-full bg-white"></span>
        </section>
    );
};

export default Section10;
