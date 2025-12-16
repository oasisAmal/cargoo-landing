import React from "react";
import { useTranslation } from "react-i18next";

const Section7: React.FC<{}> = ({}) => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    return (
        <section
            dir={isArabic ? "rtl" : "ltr"} // RTL for Arabic
            className="section7 relative mx-20 my-20 flex flex-col items-center justify-center bg-white font-stan md:flex-row"
        >
            {/* Left content */}
            <div className="m-4 flex w-full flex-col items-start bg-[#282A2C] p-6 py-20 md:w-2/5 md:px-12">
                <p className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="arrow"
                        className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} // rotate arrow for Arabic
                    />
                    {isArabic ? "بصماتنا" : "OUR FOOTPRINTS"}
                </p>

                <p
                    className="mb-6 pb-12 text-3xl font-bold text-white sm:text-4xl"
                    dangerouslySetInnerHTML={{
                        __html: isArabic
                            ? "بصماتنا العالمية <br /> بالأرقام"
                            : "Our Global Foot <br /> Prints in Numbers",
                    }}
                />

                <ul className="flex flex-col gap-8 font-stan text-sm text-gray-200 sm:text-base">
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            500+
                        </span>
                        <span>
                            {isArabic
                                ? "وجهات عالمية مخدومة"
                                : "Global Destinations Served"}
                        </span>
                    </li>
                    <hr />
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            100+
                        </span>
                        <span>
                            {isArabic
                                ? "مكاتب عالمية حول العالم"
                                : "Global Offices Worldwide"}
                        </span>
                    </li>
                    <hr />
                    <li className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-[#00b9ec]">
                            96.9%
                        </span>
                        <span>
                            {isArabic
                                ? "نسبة نجاح التخليص الجمركي"
                                : "Customs Clearance Success Rate"}
                        </span>
                    </li>
                </ul>
            </div>

            {/* Right image */}
            <div className="mt-8 flex w-full items-center justify-center md:mt-0 md:w-3/5">
                <img
                    src="/cargo/section7/section7_background.svg"
                    alt="Logistics"
                    className="w-3/4 max-w-md object-contain"
                />
            </div>
        </section>
    );
};

export default Section7;
