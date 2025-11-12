import { useState } from "react";

const Section5: React.FC = () => {
    const testimonials = [
        {
            icon: "/cargo/section5/section5_pic1.png",
            title: "Client Name",
            desc: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
            stars: 5,
        },
        {
            icon: "/cargo/section5/section5_pic2.png",
            title: "Client Name",
            desc: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
            stars: 4,
        },
        {
            icon: "/cargo/section5/section5_pic3.png",
            title: "Client Name",
            desc: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
            stars: 5,
        },
        {
            icon: "/cargo/section5/section5_pic1.png",
            title: "Client Name",
            desc: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
            stars: 4,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const handlePrev = () => {
        setStartIndex((prev) =>
            prev === 0 ? testimonials.length - visibleCount : prev - 1,
        );
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            prev + visibleCount >= testimonials.length ? 0 : prev + 1,
        );
    };

    const visibleTestimonials = testimonials.slice(
        startIndex,
        startIndex + visibleCount,
    );

    return (
        <section
            className="font-stan mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28"
            style={{
                clipPath: "polygon(0 0, 50% 0, 52% 4%,100% 4%,100% 100%,0 100%)",
            }}
        >
            <div className="mb-10 flex items-center justify-between px-6 md:px-12">
                <div>
                    <p className="mb-4 flex items-center gap-2 text-xl font-bold text-[#64748B]">
                        <img
                            src="/cargo/herosection/right_arrow_color.svg"
                            alt="colored arrow"
                            className="h-4 w-4"
                        />
                        TESTIMONIALS
                    </p>
                    <p className="flex flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                        WHAT OUR
                        <br />
                        CLIENTS SAY
                    </p>
                </div>
                <div className="flex gap-2 pt-28">
                    <button onClick={handlePrev}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M35.8301 6.00008L17.8301 24.0001L35.8301 42.0001L33.0001 44.8301L12.1701 24.0001L33.0001 3.17007L35.8301 6.00008Z"
                                fill="#0F172A"
                            />
                        </svg>
                    </button>
                    <button onClick={handleNext}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.1699 41.9999L30.1699 23.9999L12.1699 5.99992L14.9999 3.16992L35.8299 23.9999L14.9999 44.8299L12.1699 41.9999Z"
                                fill="#0F172A"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Cards */}
            <section className="px-6 md:px-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleTestimonials.map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-6 sm:p-8 lg:p-10"
                        >
                            <img
                                src={card.icon}
                                alt="Service Icon"
                                className="mx-auto h-12 w-12 sm:h-14 sm:w-14"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {card.desc}
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-1">
                                    <svg
                                        width="100"
                                        height="20"
                                        viewBox="0 0 124 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.84185 6.43272C6.84185 6.43272 3.05776 6.87211 0.533429 7.16588C0.305904 7.19475 0.104724 7.35419 0.029282 7.59649C-0.0461605 7.83878 0.0292818 8.09112 0.196932 8.25055C2.07221 10.0445 4.88993 12.7311 4.88993 12.7311C4.88753 12.7311 4.11635 16.6392 3.60382 19.2467C3.56071 19.4827 3.64214 19.7325 3.83853 19.8819C4.03372 20.0313 4.28519 20.0338 4.48278 19.9171C6.69097 18.6014 9.99846 16.6229 9.99846 16.6229C9.99846 16.6229 13.3071 18.6014 15.5117 19.9183C15.7129 20.0338 15.9644 20.0313 16.1596 19.8819C16.356 19.7325 16.4374 19.4827 16.3931 19.2479C15.8806 16.6392 15.1106 12.7311 15.1106 12.7311C15.1106 12.7311 17.9283 10.0445 19.8036 8.25432C19.9712 8.08986 20.0455 7.83752 19.9712 7.59649C19.897 7.35545 19.6958 7.19601 19.4683 7.16839C16.944 6.87211 13.1587 6.43272 13.1587 6.43272C13.1587 6.43272 11.5899 2.79454 10.5445 0.369091C10.4463 0.151905 10.2404 0 9.99846 0C9.75657 0 9.5494 0.15316 9.45599 0.369091C8.40938 2.79454 6.84185 6.43272 6.84185 6.43272Z"
                                            fill="#FFD941"
                                        />
                                        <path
                                            d="M32.8419 6.43272C32.8419 6.43272 29.0578 6.87211 26.5334 7.16588C26.3059 7.19475 26.1047 7.35419 26.0293 7.59649C25.9538 7.83878 26.0293 8.09112 26.1969 8.25055C28.0722 10.0445 30.8899 12.7311 30.8899 12.7311C30.8875 12.7311 30.1163 16.6392 29.6038 19.2467C29.5607 19.4827 29.6421 19.7325 29.8385 19.8819C30.0337 20.0313 30.2852 20.0338 30.4828 19.9171C32.691 18.6014 35.9985 16.6229 35.9985 16.6229C35.9985 16.6229 39.3071 18.6014 41.5117 19.9183C41.7129 20.0338 41.9644 20.0313 42.1596 19.8819C42.356 19.7325 42.4374 19.4827 42.3931 19.2479C41.8806 16.6392 41.1106 12.7311 41.1106 12.7311C41.1106 12.7311 43.9283 10.0445 45.8036 8.25432C45.9712 8.08986 46.0455 7.83752 45.9712 7.59649C45.897 7.35545 45.6958 7.19601 45.4683 7.16839C42.944 6.87211 39.1587 6.43272 39.1587 6.43272C39.1587 6.43272 37.5899 2.79454 36.5445 0.369091C36.4463 0.151905 36.2404 0 35.9985 0C35.7566 0 35.5494 0.15316 35.456 0.369091C34.4094 2.79454 32.8419 6.43272 32.8419 6.43272Z"
                                            fill="#FFD941"
                                        />
                                        <path
                                            d="M58.8419 6.43272C58.8419 6.43272 55.0578 6.87211 52.5334 7.16588C52.3059 7.19475 52.1047 7.35419 52.0293 7.59649C51.9538 7.83878 52.0293 8.09112 52.1969 8.25055C54.0722 10.0445 56.8899 12.7311 56.8899 12.7311C56.8875 12.7311 56.1163 16.6392 55.6038 19.2467C55.5607 19.4827 55.6421 19.7325 55.8385 19.8819C56.0337 20.0313 56.2852 20.0338 56.4828 19.9171C58.691 18.6014 61.9985 16.6229 61.9985 16.6229C61.9985 16.6229 65.3071 18.6014 67.5117 19.9183C67.7129 20.0338 67.9644 20.0313 68.1596 19.8819C68.356 19.7325 68.4374 19.4827 68.3931 19.2479C67.8806 16.6392 67.1106 12.7311 67.1106 12.7311C67.1106 12.7311 69.9283 10.0445 71.8036 8.25432C71.9712 8.08986 72.0455 7.83752 71.9712 7.59649C71.897 7.35545 71.6958 7.19601 71.4683 7.16839C68.944 6.87211 65.1587 6.43272 65.1587 6.43272C65.1587 6.43272 63.5899 2.79454 62.5445 0.369091C62.4463 0.151905 62.2404 0 61.9985 0C61.7566 0 61.5494 0.15316 61.456 0.369091C60.4094 2.79454 58.8419 6.43272 58.8419 6.43272Z"
                                            fill="#FFD941"
                                        />
                                        <path
                                            d="M84.8419 6.43272C84.8419 6.43272 81.0578 6.87211 78.5334 7.16588C78.3059 7.19475 78.1047 7.35419 78.0293 7.59649C77.9538 7.83878 78.0293 8.09112 78.1969 8.25055C80.0722 10.0445 82.8899 12.7311 82.8899 12.7311C82.8875 12.7311 82.1163 16.6392 81.6038 19.2467C81.5607 19.4827 81.6421 19.7325 81.8385 19.8819C82.0337 20.0313 82.2852 20.0338 82.4828 19.9171C84.691 18.6014 87.9985 16.6229 87.9985 16.6229C87.9985 16.6229 91.3071 18.6014 93.5117 19.9183C93.7129 20.0338 93.9644 20.0313 94.1596 19.8819C94.356 19.7325 94.4374 19.4827 94.3931 19.2479C93.8806 16.6392 93.1106 12.7311 93.1106 12.7311C93.1106 12.7311 95.9283 10.0445 97.8036 8.25432C97.9712 8.08986 98.0455 7.83752 97.9712 7.59649C97.897 7.35545 97.6958 7.19601 97.4683 7.16839C94.944 6.87211 91.1587 6.43272 91.1587 6.43272C91.1587 6.43272 89.5899 2.79454 88.5445 0.369091C88.4463 0.151905 88.2404 0 87.9985 0C87.7566 0 87.5494 0.15316 87.456 0.369091C86.4094 2.79454 84.8419 6.43272 84.8419 6.43272Z"
                                            fill="#FFD941"
                                        />
                                        <path
                                            d="M110.842 6.43272C110.842 6.43272 107.058 6.87211 104.533 7.16588C104.306 7.19475 104.105 7.35419 104.029 7.59649C103.954 7.83878 104.029 8.09112 104.197 8.25055C106.072 10.0445 108.89 12.7311 108.89 12.7311C108.888 12.7311 108.116 16.6392 107.604 19.2467C107.561 19.4827 107.642 19.7325 107.839 19.8819C108.034 20.0313 108.285 20.0338 108.483 19.9171C110.691 18.6014 113.998 16.6229 113.998 16.6229C113.998 16.6229 117.307 18.6014 119.512 19.9183C119.713 20.0338 119.964 20.0313 120.16 19.8819C120.356 19.7325 120.437 19.4827 120.393 19.2479C119.881 16.6392 119.111 12.7311 119.111 12.7311C119.111 12.7311 121.928 10.0445 123.804 8.25432C123.971 8.08986 124.045 7.83752 123.971 7.59649C123.897 7.35545 123.696 7.19601 123.468 7.16839C120.944 6.87211 117.159 6.43272 117.159 6.43272C117.159 6.43272 115.59 2.79454 114.545 0.369091C114.446 0.151905 114.24 0 113.998 0C113.757 0 113.549 0.15316 113.456 0.369091C112.409 2.79454 110.842 6.43272 110.842 6.43272Z"
                                            fill="#FFD941"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Section5;
