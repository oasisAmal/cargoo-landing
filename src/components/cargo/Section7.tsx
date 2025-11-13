import React from "react";

const Section7: React.FC = () => {
    return (
        <section
            className="section7 relative mx-20 my-20 flex flex-col items-center justify-center bg-white font-stan md:flex-row"
        >
            {/* Left content */}
            <div className="m-4 flex w-full flex-col items-start bg-[#282A2C] p-6 py-20 md:w-2/5 md:px-12">
                <p className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="arrow"
                        className="h-4 w-4"
                    />
                    OUR FOOTPRINTS
                </p>

                <p className="mb-6 pb-12 text-3xl font-bold text-white sm:text-4xl">
                    Our Global Foot <br /> Prints in Numbers
                </p>

                <ul className="flex flex-col gap-8 font-stan text-sm text-gray-200 sm:text-base">
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            500+
                        </span>
                        <span>Global Destinations Served</span>
                    </li>
                    <hr />
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            100+
                        </span>
                        <span>Global Offices Worldwide</span>
                    </li>
                    <hr />
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            96.9%
                        </span>
                        <span>Customs Clearance Success Rate</span>
                    </li>
                </ul>
            </div>

            {/* Right image */}
            <div className="mt-8 flex w-full items-center justify-center md:mt-0 md:w-3/5">
                <img
                    src="/cargo/section7/section7_background.svg"
                    alt="Logistics"
                    className="w-3/4 max-w-md object-contain"
                />
            </div>
        </section>
    );
};

export default Section7;
