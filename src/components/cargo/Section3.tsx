const Section3: React.FC = () => {
    return (
        <section className="font-stan clip-top-shape1 mt-28 w-full overflow-hidden bg-[#2E3135] pb-20 pt-28">
            <div className="px-6 md:px-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                    <div className="text-center md:text-left">
                        <p className="mb-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-white md:justify-start md:text-xl">
                            <img
                                src="/cargo/herosection/right_arrow_color.svg"
                                alt="colored arrow"
                                className="h-4 w-4"
                            />
                            OUR SERVICES
                        </p>
                        <p className="w-full text-left text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            DIVERSE FLEET FOR
                            <br />
                            EVERY FREIGHT NEED
                        </p>
                    </div>

                    <div className="flex hidden justify-center sm:mb-10 sm:block md:justify-end">
                        <img
                            src="/cargo/section3/map_pin.svg"
                            alt="map pin"
                            className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[450px]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 px-6 py-12 sm:mt-[-280px] md:grid-cols-3 md:gap-10 lg:px-12">
                <div className="flex items-start justify-start">
                    <p className="text-6xl font-bold text-[#00B9EC] sm:text-7xl">
                        01
                    </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-3 sm:ml-[-140px] sm:text-center md:text-left">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        Container Ships
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        FOR GLOBAL SEA FREIGHT
                    </p>
                    <p className="max-w-xl pb-8 text-sm leading-relaxed text-white sm:text-base">
                        Ideal for bulk goods and long-distance trade, our
                        container
                        <br />
                        ship network connects major ports worldwide. We provide
                        <br />
                        reliable and cost-effective ocean freight solutions,
                        backed by
                        <br />
                        real-time tracking and full customs support.
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        Learn More &nbsp;
                        <img
                            src="/cargo/herosection/right_arrow.svg"
                            alt="arrow"
                            className="h-4 w-4"
                        />
                    </button>
                </div>

                <div
                    className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[300px]"
                    style={{
                        clipPath:
                            "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)",
                    }}
                >
                    <video
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        src="/cargo/section3/video1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 bg-[#282A2C] px-6 py-20 md:grid-cols-3 md:gap-10 lg:px-12">
                <div className="flex items-start justify-start">
                    <p className="text-6xl font-bold text-[#00B9EC] sm:text-7xl">
                        02
                    </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-3 sm:ml-[-140px] sm:text-center md:text-left">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        Heavy Trucks
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        FOR REGIONAL AND LONG-DISTANCE LAND TRANSPORT
                    </p>
                    <p className="max-w-xl pb-8 text-sm leading-relaxed text-white sm:text-base">
                        Our fleet of heavy-duty trucks ensures smooth domestic
                        and
                        <br />
                        cross-border deliveries. From full truckloads (FTL) to
                        less-
                        <br />
                        than-truckload (LTL) options, we handle everything from
                        <br />
                        industrial cargo to retail distribution with flexibility
                        and speed.
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        Learn More &nbsp;
                        <img
                            src="/cargo/herosection/right_arrow.svg"
                            alt="arrow"
                            className="h-4 w-4"
                        />
                    </button>
                </div>

                <div
                    className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[300px]"
                    style={{
                        clipPath:
                            "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)",
                    }}
                >
                    <video
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        src="/cargo/section3/video2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
            <div className="bg-[# mt-10 grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3 md:gap-10 lg:px-12">
                <div className="flex items-start justify-start">
                    <p className="text-6xl font-bold text-[#00B9EC] sm:text-7xl">
                        03
                    </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-3 sm:ml-[-140px] sm:text-center md:text-left">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        Delivery Chiller Vans
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        FOR FAST, LAST-MILE SERVICE
                    </p>
                    <p className="max-w-xl pb-8 text-sm leading-relaxed text-white sm:text-base">
                        Speed and precision matter in the final leg of delivery.
                        Our
                        <br />
                        agile delivery vans provide efficient last-mile
                        transport, ideal
                        <br />
                        for eCommerce, urban logistics, and time-sensitive
                        packages
                        <br />
                        —right to your customer’s door.
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        Learn More &nbsp;
                        <img
                            src="/cargo/herosection/right_arrow.svg"
                            alt="arrow"
                            className="h-4 w-4"
                        />
                    </button>
                </div>

                <div
                    className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[300px]"
                    style={{
                        clipPath:
                            "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30px)",
                    }}
                >
                    <video
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        src="/cargo/section3/video3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default Section3;
