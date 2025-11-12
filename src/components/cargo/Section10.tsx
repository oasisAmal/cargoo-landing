import React from "react";

const logos = [
    "/cargo/section10/partner1.svg",
    "/cargo/section10/partner2.svg",
    "/cargo/section10/partner3.png",
    "/cargo/section10/partner4.svg",
    "/cargo/section10/partner5.png",
    "/cargo/section10/partner5.svg",
    "/cargo/section10/partner6.svg",
];

const Section10: React.FC = () => {
    return (
        <section className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-white font-stan">
            {/* Title */}
            <p className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 sm:text-base">
                <img
                    src="/cargo/herosection/right_arrow_color.svg"
                    alt="colored arrow"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                />
                TRUSTED BY
            </p>
            <p className="mb-10 text-xl font-bold text-gray-900 sm:text-3xl">
                OUR PARTNERS
            </p>

            {/* Scrolling Logos */}
            <div className="relative w-full overflow-hidden">
                <div className="flex w-[200%] animate-scrollLeft">
                    {/* First copy of logos */}
                    <div className="flex w-1/2 items-center justify-around gap-8 sm:gap-16 px-5 sm:px-10">
                        {logos.map((logo, i) => (
                            <img
                                key={`logo1-${i}`}
                                src={logo}
                                alt={`partner-${i}`}
                                className="h-10 w-auto sm:h-16 md:h-20 object-contain opacity-80 transition hover:opacity-100"
                            />
                        ))}
                    </div>
                    {/* Second copy for seamless loop */}
                    <div className="flex w-1/2 items-center justify-around gap-8 sm:gap-16 px-5 sm:px-10">
                        {logos.map((logo, i) => (
                            <img
                                key={`logo2-${i}`}
                                src={logo}
                                alt={`partner-${i}`}
                                className="h-10 w-auto sm:h-16 md:h-20 object-contain opacity-80 transition hover:opacity-100"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
