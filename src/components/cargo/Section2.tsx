const Section2: React.FC = () => {
    return (
        <section className="font-stan clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28">
            {/* Section Header */}
            <div className="px-6 md:px-12">
                <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        className="h-4 w-4"
                    />
                    OUR SERVICES
                </p>

                <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                    COMPREHENSIVE
                    <br />
                    LOGISTICS SERVICES
                </p>
            </div>

            {/* Cards Section */}
            <section className="px-6 py-10 md:px-12 md:py-16">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: "/cargo/section2/section2_icon1.svg",
                            title: (
                                <>
                                    International
                                    <br />
                                    Shipping
                                </>
                            ),
                            desc: "Seamless freight services across continents. We handle all the complexities so you don't have to.",
                        },
                        {
                            icon: "/cargo/section2/section2_icon2.svg",
                            title: (
                                <>
                                    Domestic
                                    <br />
                                    Delivery
                                </>
                            ),
                            desc: "Fast and dependable freight coverage across the country — from last-mile delivery to bulk transportation.",
                        },
                        {
                            icon: "/cargo/section2/section2_icon3.svg",
                            title: "Sea Freight",
                            desc: "Cost-effective solutions for large and heavy cargo. Full container load (FCL) and less than container load (LCL) options available.",
                        },
                        {
                            icon: "/cargo/section2/section2_icon4.svg",
                            title: (
                                <>
                                    Customs
                                    <br />
                                    Clearance
                                </>
                            ),
                            desc: "Avoid delays and penalties — our experts manage all documentation and regulations for swift border crossings.",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-8 sm:p-10 lg:p-12"
                            style={{
                                clipPath:
                                    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                            }}
                        >
                            <img
                                src={card.icon}
                                alt="Service Icon"
                                className="h-12 w-12 sm:h-14 sm:w-14"
                            />
                            <div className="mt-4 text-left">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Section2;
