// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// interface FAQItem {
//     question: string;
//     answer: string;
// }

// const faqs: FAQItem[] = [
//     {
//         question: "ما أنواع الشحنات التي تتعاملون معها؟",
//         answer: "نتعامل مع مجموعة واسعة من الشحنات، بما في ذلك الشحن العام، المعدات الكبيرة، البضائع القابلة للتلف، المواد الخطرة، والشحنات الحساسة للوقت. اتصل بنا للحصول على حلول لوجستية مخصصة لشحنتك.",
//     },
//     {
//         question: "هل تقدمون خدمات الشحن الدولي؟",
//         answer: "نتعامل مع مجموعة واسعة من الشحنات، بما في ذلك الشحن العام، المعدات الكبيرة، البضائع القابلة للتلف، المواد الخطرة، والشحنات الحساسة للوقت. اتصل بنا للحصول على حلول لوجستية مخصصة لشحنتك.",
//     },
//     {
//         question: "كيف يمكنني الحصول على عرض سعر لشحنتي؟",
//         answer: "نتعامل مع مجموعة واسعة من الشحنات، بما في ذلك الشحن العام، المعدات الكبيرة، البضائع القابلة للتلف، المواد الخطرة، والشحنات الحساسة للوقت. اتصل بنا للحصول على حلول لوجستية مخصصة لشحنتك.",
//     },
//     {
//         question: "هل يمكنني تتبع شحنتي في الوقت الفعلي؟",
//         answer: "نتعامل مع مجموعة واسعة من الشحنات، بما في ذلك الشحن العام، المعدات الكبيرة، البضائع القابلة للتلف، المواد الخطرة، والشحنات الحساسة للوقت. اتصل بنا للحصول على حلول لوجستية مخصصة لشحنتك.",
//     },
//     {
//         question: "هل تقدمون خدمات التخليص الجمركي؟",
//         answer: "نتعامل مع مجموعة واسعة من الشحنات، بما في ذلك الشحن العام، المعدات الكبيرة، البضائع القابلة للتلف، المواد الخطرة، والشحنات الحساسة للوقت. اتصل بنا للحصول على حلول لوجستية مخصصة لشحنتك.",
//     },
// ];

// const Section9: React.FC<{}> = ({}) => {
//     const { t, i18n } = useTranslation();
//     const isArabic = i18n.language === "ar";
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleFAQ = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <section
//             dir={isArabic ? "rtl" : "ltr"} // RTL for Arabic
//             className="flex flex-col-reverse items-center justify-center gap-20 bg-gray-100 px-6 py-16 pb-28 font-stan lg:flex-row lg:items-center lg:gap-10"
//         >
//             {/* LEFT SIDE: FAQ */}
//             <div className="mx-20 w-full max-w-2xl px-4 lg:w-1/2">
//                 <p
//                     className={`mb-6 flex w-full items-center gap-2 text-xl font-bold text-[#64748B] ${isArabic ? "flex-row-reverse justify-end" : "justify-start"}`}
//                 >
//                     <img
//                         src="/cargo/herosection/right_arrow_color.svg"
//                         alt="colored arrow"
//                         className="h-4 w-4"
//                     />
//                     {isArabic ? "الأسئلة الشائعة" : "FAQ"}
//                 </p>

//                 <h2
//                     className={`mb-10 text-3xl font-bold sm:text-4xl ${isArabic ? "text-right" : "text-left"}`}
//                 >
//                     {isArabic
//                         ? "هل لديك أسئلة؟\nلدينا الإجابات"
//                         : "GOT QUESTIONS ?\nWE'VE GOT ANSWERS"}
//                 </h2>

//                 <div className="space-y-1">
//                     {faqs.map((faq, index) => (
//                         <div key={index} className="bg-white">
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className={`flex w-full items-center justify-between px-5 py-4 text-left text-gray-800 ${isArabic ? "flex-row-reverse" : ""}`}
//                             >
//                                 <span
//                                     className={`font-regular text-base sm:text-lg ${
//                                         openIndex === index
//                                             ? "text-[#00B9EC]"
//                                             : "text-[#222222]"
//                                     }`}
//                                 >
//                                     {faq.question}
//                                 </span>
//                                 <span
//                                     className={`text-2xl font-bold ${
//                                         openIndex === index
//                                             ? "text-[#00B9EC]"
//                                             : "text-black"
//                                     }`}
//                                 >
//                                     {openIndex === index ? "−" : "+"}
//                                 </span>
//                             </button>

//                             {openIndex === index && (
//                                 <div
//                                     className={`px-5 pb-4 text-sm text-[#334155] sm:text-base ${isArabic ? "text-right" : "text-left"}`}
//                                 >
//                                     {faq.answer}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* RIGHT SIDE: IMAGE */}
//             <div className="mx-20 flex w-full justify-center lg:w-1/2">
//                 <img
//                     src="/cargo/section9/section9_background.png"
//                     alt="FAQ illustration"
//                     className="w-full object-cover sm:h-[600px]"
//                     style={{
//                         clipPath:
//                             "polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px)",
//                     }}
//                 />
//             </div>
//         </section>
//     );
// };

// export default Section9;


import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Define an interface for the content keys in the translation files
interface FAQKeys {
    questionKey: string;
    answerKey: string;
}

// Define the FAQ structure using translation keys instead of hardcoded text
// NOTE: Each item must correspond to a set of keys in your en.json and ar.json files.
const faqKeys: FAQKeys[] = [
    { questionKey: "faq.q1", answerKey: "faq.a1" },
    { questionKey: "faq.q2", answerKey: "faq.a2" },
    { questionKey: "faq.q3", answerKey: "faq.a3" },
    { questionKey: "faq.q4", answerKey: "faq.a4" },
    { questionKey: "faq.q5", answerKey: "faq.a5" },
];

const Section9: React.FC<{}> = ({}) => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // The header text is already correctly handled using ternary operators, 
    // but we can optimize this further using t() if keys are available.

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"} // RTL for Arabic
            className="flex flex-col-reverse items-center justify-center gap-20 bg-gray-100 py-16 pb-28 font-stan lg:flex-row lg:items-center lg:gap-10"
        >
            {/* LEFT SIDE: FAQ */}
            <div className="mx-12 w-full max-w-2xl lg:w-1/2">
                <p
                    className={`mb-6 flex w-full items-center gap-2 text-xl font-bold text-[#64748B] ${isArabic ? "flex-row-reverse justify-end" : "justify-start"}`}
                >
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        // Rotate arrow for Arabic
                        className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} 
                    />
                    {/* Localize Static Header */}
                    {t("faq.sectionTitle").toUpperCase()}
                </p>

                <h2
                    className={`mb-10 text-3xl font-bold sm:text-4xl md:text-5xl ${isArabic ? "text-right" : "text-left"}`}
                >
                    {/* Localize Main Heading using t() */}
                    <span dangerouslySetInnerHTML={{ __html: t("faq.mainHeading") }} />
                </h2>

                <div className="space-y-1">
                    {/* 2. Iterate over keys and use t() to get the content */}
                    {faqKeys.map((faq, index) => (
                        <div key={index} className="bg-white">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`flex w-full items-center justify-between px-5 py-4 text-left text-gray-800 ${isArabic ? "flex-row-reverse" : ""}`}
                            >
                                <span
                                    className={`font-regular text-base sm:text-lg ${
                                        openIndex === index
                                            ? "text-[#00B9EC]"
                                            : "text-[#222222]"
                                    }`}
                                >
                                    {/* Use translation key for Question */}
                                    {t(faq.questionKey)} 
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
                                <div
                                    className={`px-5 pb-4 text-sm text-[#334155] sm:text-base ${isArabic ? "text-right" : "text-left"}`}
                                >
                                    {/* Use translation key for Answer */}
                                    {t(faq.answerKey)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE (Unchanged) */}
            <div className="mx-20 flex w-full justify-center lg:w-1/2">
                <img
                    src="/cargo/section9/section9_background.png"
                    alt="FAQ illustration"
                    className="w-full object-cover sm:h-[600px]"
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