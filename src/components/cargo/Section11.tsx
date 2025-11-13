import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Section11: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_00s1hky",
                "template_v60579w",
                formRef.current,
                "RrI8_5Wz07X95nN9G",
            )
            .then(
                (result) => {
                    alert("Quote request sent successfully!");
                    formRef.current?.reset();
                },
                (error) => {
                    alert("Failed to send. Please try again.");
                    console.error(error);
                },
            );
    };

    return (
        <section
            className="relative flex h-auto min-h-[600px] w-full flex-col overflow-hidden font-stan md:h-[600px] md:flex-row"
            id="quote-section"
        >
            <img
                src="/cargo/section11/section11_background.png"
                alt="Logistics"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="z-2 relative flex h-full w-full flex-col md:flex-row">
                {/* Left Side: FAQ */}
                <div className="flex w-full flex-col justify-center px-6 py-12 text-white sm:px-10 md:w-2/3 md:px-16 md:py-20">
                    <p className="mb-4 flex w-full items-center justify-center gap-2 text-center text-lg font-bold text-white sm:justify-start sm:text-xl">
                        <img
                            src="/cargo/herosection/right_arrow_color.svg"
                            alt="colored arrow"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                        FAQ
                    </p>

                    <p className="mb-6 max-w-3xl text-center text-3xl font-semibold sm:text-left sm:text-4xl md:text-5xl">
                        DIVERSE FLEET FOR
                        <br />
                        EVERY FREIGHT NEED
                    </p>

                    <div className="flex justify-center sm:justify-start">
                        <button className="mt-6 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:mt-10 sm:px-5 sm:text-sm md:mt-12">
                            Learn More &nbsp;
                            <img
                                src="/cargo/herosection/right_arrow.svg"
                                alt="arrow"
                                className="h-3 w-3 sm:h-4 sm:w-4"
                            />
                        </button>
                    </div>
                </div>

                {/* Right Side: Quote Form */}
                <div className="relative flex w-full items-center justify-center md:w-1/3">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md md:bg-black/30"></div>

                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="relative z-10 w-full max-w-md space-y-4 px-6 py-10 text-white sm:px-10 sm:py-12 md:px-6 md:py-12"
                    >
                        <h1 className="mb-4 font-stan text-3xl font-bold sm:text-4xl md:text-5xl">
                            Get a Quote
                        </h1>
                        <p className="mb-6 text-sm sm:text-base">
                            Tell us about your shipment and receive a
                            personalized quote.
                        </p>

                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <input
                            type="tel"
                            name="user_phone"
                            placeholder="Your Number"
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full resize-none border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                            rows={4}
                            required
                        />
                        <input
                            type="hidden"
                            name="recipient_email"
                            value="n.alyafeai@ogms.ae"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#00B9EC] px-5 py-2 font-manrope text-white transition hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:py-3"
                        >
                            GET A QUOTE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Section11;
