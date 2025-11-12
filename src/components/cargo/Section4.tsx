const Section4: React.FC = () => {
    return (
        <section className="font-stan relative flex flex-col items-center justify-center bg-white px-6 py-20 md:flex-row md:p-0">
            <div className="relative h-64 w-full md:h-screen md:w-1/2">
                <img
                    src="/cargo/section4/section4_background.png"
                    alt="Logistics"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="mt-8 w-full flex-col items-start md:mt-0 md:w-1/2 md:pl-12">
                <p className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="arrow"
                        className="h-4 w-4"
                    />
                    WHY CHOOSE US
                </p>

                <p className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                    Your Trusted Logistics <br /> Partner for Global Freight
                </p>

                <p className="mb-6 font-manrope text-base text-[#1E293B] sm:text-sm md:text-base">
                    When it comes to shipping, precision and reliability aren’t
                    optional—they’re essential. Here’s why businesses around the
                    world choose us to move what matters:
                </p>

                <ul className="flex flex-col gap-4 font-manrope text-sm text-gray-700 sm:text-base">
                    {[
                        "End-to-End Expertise",
                        "Fast & Transparent Communication",
                        "Flexible Transport Options",
                        "Customs Clearance Made Simple",
                        "Reliability You Can Measure",
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <img
                                src="/cargo/section4/check_icon.svg"
                                alt="check"
                                className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="pt-8 font-manrope text-xl font-semibold text-[#1E293B] sm:text-2xl">
                    Let’s talk about your next shipment
                </p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <button className="font-regular flex w-full items-center justify-center rounded-full bg-[#00B9EC] px-4 py-2 text-xs text-white transition hover:bg-[#2E3135] hover:text-white sm:w-auto sm:px-5 sm:text-sm">
                        GET IN TOUCH
                    </button>
                    <button className="font-regular flex w-full items-center justify-center rounded-full border border-black px-4 py-2 text-xs text-black transition hover:border-none hover:bg-[#2E3135] hover:text-white sm:w-auto sm:px-5 sm:text-sm">
                        CONTACT US &nbsp;
                        <img
                            src="/cargo/herosection/right_arrow_color.svg"
                            alt="arrow"
                            className="h-4 w-4"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section4;
