import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What types of cargo do you handle?",
        answer: "We handle a wide range of cargo, including general freight, oversized equipment, perishable goods, hazardous materials, and time-sensitive deliveries. Contact us for custom logistics solutions tailored to your shipment.",
    },
    {
        question: "Do you provide international shipping services?",
        answer: "We handle a wide range of cargo, including general freight, oversized equipment, perishable goods, hazardous materials, and time-sensitive deliveries. Contact us for custom logistics solutions tailored to your shipment.",
    },
    {
        question: "How can I get a quote for my shipment?",
        answer: "We handle a wide range of cargo, including general freight, oversized equipment, perishable goods, hazardous materials, and time-sensitive deliveries. Contact us for custom logistics solutions tailored to your shipment.",
    },
    {
        question: "Can I track my shipment in real time?",
        answer: "We handle a wide range of cargo, including general freight, oversized equipment, perishable goods, hazardous materials, and time-sensitive deliveries. Contact us for custom logistics solutions tailored to your shipment.",
    },
    {
        question: "Do you offer customs clearance services?",
        answer: "We handle a wide range of cargo, including general freight, oversized equipment, perishable goods, hazardous materials, and time-sensitive deliveries. Contact us for custom logistics solutions tailored to your shipment.",
    },
];

const Section9: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col-reverse items-center justify-center gap-20 bg-gray-100 px-6 py-16 font-stan lg:flex-row lg:items-center lg:gap-10 pb-28">
            {/* LEFT SIDE: FAQ */}
            <div className="w-full max-w-2xl px-4 lg:w-1/2 mx-20">
                <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        className="h-4 w-4"
                    />
                    FAQ
                </p>
                <h2 className="mb-10 text-3xl font-bold text-gray-800 sm:text-4xl">
                    GOT QUESTIONS ?<br />
                    WE'VE GOT ANSWERS
                </h2>

                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-5 py-4 text-left text-gray-800"
                            >
                                <span
                                    className={`font-regular text-base sm:text-lg ${
                                        openIndex === index
                                            ? "text-[#00B9EC]"
                                            : "text-[#222222]"
                                    }`}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={`text-2xl font-bold ${
                                        openIndex === index
                                            ? "text-[#00B9EC]"
                                            : "text-black"
                                    }`}
                                >
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-4 text-sm text-[#334155] sm:text-base">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE */}
            <div className="flex w-full justify-center lg:w-1/2 mx-20">
                <img
                    src="/cargo/section9/section9_background.png"
                    alt="FAQ illustration"
                    className="sm:h-[600px] w-full object-cover"
                    style={{
                        clipPath:
                            "polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px)",
                    }}
                />
            </div>
        </section>
    );
};

export default Section9;
