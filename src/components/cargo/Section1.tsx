const Section1: React.FC = () => {
    return (
        <section className="font-stan mt-28 w-full overflow-hidden">
            {/* Header */}
            <p className="mb-4 flex w-full items-center justify-center gap-2 text-center text-xl font-bold text-[#64748B]">
                <img
                    src="/cargo/herosection/right_arrow_color.svg"
                    alt="colored arrow"
                    className="h-4 w-4"
                />
                ABOUT US
            </p>

            <p className="mx-auto mb-4 max-w-4xl text-center text-4xl font-semibold sm:text-5xl">
                Connecting the World,
                <br />
                One Shipment at a Time
            </p>

            <p className="mb-24 w-full px-4 text-center text-base text-gray-800 sm:px-20 lg:px-40 font-sans">
                With years of proven expertise in logistics, we ensure the safe
                and efficient delivery of <br />
                cargo worldwide. From small parcels to large shipments, our
                customized solutions <br />
                guarantee on-time delivery and full transparency every step of
                the way.
            </p>

            <section
                className="relative mx-4 flex h-screen w-auto flex-col overflow-hidden sm:mx-12"
                style={{
                    clipPath:
                        "polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px)",
                }}
            >
                <img
                    src="/cargo/section1/section1_background.jpg"
                    alt="Logistics"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative flex h-full w-full">
                    <div className="relative flex flex-col justify-center px-6 text-white sm:px-8 ml-auto md:max-w-xl md:px-16">
                        
                        <div className="absolute inset-0 m-3 bg-black/40 backdrop-blur-md"></div>

                        <div className="relative z-10 flex flex-col space-y-6">
                            <h2 className="font-stan text-2xl font-bold sm:text-3xl md:text-4xl">
                                Driven by Logistics. <br /> Powered by People.
                            </h2>

                            <button className="flex w-max items-center rounded-full border border-white hover:border-none px-5 py-2 text-sm font-semibold transition hover:bg-[#00B9EC] hover:text-white sm:text-base">
                                About US &nbsp;
                                <img
                                    src="/cargo/herosection/right_arrow.svg"
                                    alt="arrow"
                                    className="h-4 w-4"
                                />
                            </button>
                            <span className="py-12 hidden sm:block"></span>
                            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-20 sm:space-y-0">
                                <div>
                                    <h3 className="text-3xl font-bold sm:text-5xl">
                                        01+
                                    </h3>
                                    <p className="mb-2 text-sm font-semibold sm:mb-4 sm:text-lg">
                                        Years of Experience
                                    </p>
                                    <p className="max-w-xl text-xs sm:text-base">
                                        We’ve built our
                                        <br />
                                        reputation on reliability,
                                        <br />
                                        transparency, and
                                        <br />
                                        innovation.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold sm:text-5xl">
                                        293k+
                                    </h3>
                                    <p className="mb-2 text-sm font-semibold sm:mb-4 sm:text-lg">
                                        Shipments Delivered
                                    </p>
                                    <p className="max-w-xs text-xs sm:text-base">
                                        Our experience spans
                                        <br />
                                        over a million
                                        <br />
                                        successful freight
                                        <br />
                                        movements — by air,
                                        <br />
                                        sea, and land.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Section1;
