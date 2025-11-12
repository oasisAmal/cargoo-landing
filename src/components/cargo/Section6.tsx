const Section6: React.FC = () => {
    const messages = [
        "Reliable Transit Time",
        "Global Freight Solutions",
        "Real-time Shipment Tracking",
    ];

    return (
        <section className="mt-12 w-full overflow-hidden bg-gray-100 py-20 font-stan">
            <div className="relative flex h-24 items-center">
                <div className="absolute w-full overflow-hidden">
                    <div className="ticker animate-ticker flex items-center whitespace-nowrap">
                        {messages.map((msg, idx) => (
                            <span
                                key={idx}
                                className="mx-8 inline-flex items-center text-3xl font-bold md:text-5xl uppercase"
                            >
                                {msg}
                                <img
                                    src="/cargo/section6/section6_map.svg"
                                    alt="map icon"
                                    className="mx-16 h-16 w-16 md:h-24 md:w-16"
                                />
                            </span>
                        ))}

                        {messages.map((msg, idx) => (
                            <span
                                key={idx + messages.length}
                                className="mx-8 inline-flex items-center text-3xl font-bold md:text-5xl uppercase"
                            >
                                {msg}
                                <img
                                    src="/cargo/section6/section6_map.svg"
                                    alt="map icon"
                                    className="mx-16 h-16 w-16 md:h-24 md:w-16"
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
          .animate-ticker {
            display: inline-flex;
            animation: ticker 10s linear infinite;
          }

          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
};

export default Section6;
