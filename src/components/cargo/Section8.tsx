const Section8: React.FC = () => {
    const blogs = [
        {
            date: "Nov 30, 2025",
            title: "How We Ensure Safe & On-Time Freight",
            img: "/cargo/section8/blog1.jpg",
        },
        {
            date: "Nov 30, 2025",
            title: "How We Ensure Safe & On-Time Freight",
            img: "/cargo/section8/blog2.jpg",
        },
        {
            date: "Nov 30, 2025",
            title: "How We Ensure Safe & On-Time Freight",
            img: "/cargo/section8/blog3.jpg",
        },
        {
            date: "Nov 30, 2025",
            title: "How We Ensure Safe & On-Time Freight",
            img: "/cargo/section8/blog4.jpg",
        },
    ];
    return (
        <section className="clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28 font-stan">
            <div className="px-6 md:px-12">
                <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        className="h-4 w-4"
                    />
                    LATEST NEWS
                </p>

                <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                    INSIGHTS FROM
                    <br />
                    THE FIELD
                </p>
            </div>

            <section className="mt-20 w-full px-6 font-stan md:px-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {blogs.map((blog, i) => (
                        <div
                            key={i}
                            className="flex flex-col overflow-hidden border border-gray-200 bg-white"
                        >
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="h-56 w-full object-cover p-2"
                                style={{
                                    clipPath:
                                        "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
                                }}
                            />

                            <div className="flex flex-col justify-between p-5">
                                <p className="text-sm font-semibold tracking-widest text-[#64748B]">
                                    {blog.date.toUpperCase()}
                                </p>

                                <h2 className="mb-4 mt-2 text-lg font-bold leading-snug text-gray-900">
                                    {blog.title}
                                </h2>

                                <div className="flex items-center gap-2 border-t border-gray-200 pt-3 text-base font-semibold text-[#64748B]">
                                    Read More
                                    <img
                                        src="/cargo/herosection/right_arrow_color.svg"
                                        alt="arrow"
                                        className="h-4 w-4 text-[#00B9EC]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Section8;
