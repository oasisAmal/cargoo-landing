import { useTranslation } from "react-i18next";

const Section4: React.FC<{}> = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const headingSmall = isArabic ? "لماذا تختارنا" : "WHY CHOOSE US";
    const headingBig = isArabic
        ? "شريكك الموثوق للشحن\nالدولي"
        : "Your Trusted Logistics \n Partner for Global Freight";
    const description = isArabic
        ? "عندما يتعلق الأمر بالشحن، فإن الدقة والموثوقية ليست اختيارية — إنها أساسية. إليك لماذا تختار الشركات حول العالمنا لنقل ما يهم:"
        : "When it comes to shipping, precision and reliability aren’t optional—they’re essential. Here’s why businesses around the world choose us to move what matters:";
    const listItems = isArabic
        ? [
              "خبرة شاملة من البداية للنهاية",
              "اتصال سريع وشفاف",
              "خيارات نقل مرنة",
              "تسهيل التخليص الجمركي",
              "موثوقية يمكن قياسها",
          ]
        : [
              "End-to-End Expertise",
              "Fast & Transparent Communication",
              "Flexible Transport Options",
              "Customs Clearance Made Simple",
              "Reliability You Can Measure",
          ];
    const contactTitle = isArabic
        ? "دعنا نتحدث عن شحنتك القادمة"
        : "Let’s talk about your next shipment";
    const getInTouchText = isArabic ? "تواصل معنا" : "GET IN TOUCH";
    const contactUsText = isArabic ? "اتصل بنا" : "CONTACT US";

    return (
        <section
            dir={isArabic ? "rtl" : "ltr"} // <--- important for layout flip
            className={`relative flex flex-col items-center justify-center bg-white px-6 py-20 font-stan md:flex-row md:p-0
                ${isArabic ? "gap-0 sm:gap-8" : ""}`}
        >
            {/* Image */}
            <div className="relative h-64 w-full md:h-screen md:w-1/2">
                <img
                    src="/cargo/section4/section4_background.png"
                    alt="Logistics"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-8 w-full flex-col items-start md:mt-0 md:w-1/2 md:pl-12">
                <p className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="arrow"
                        className="h-4 w-4"
                    />
                    {headingSmall}
                </p>

                <p className="mb-6 whitespace-pre-line text-3xl font-bold sm:text-4xl md:text-5xl">
                    {headingBig}
                </p>

                <p className="mb-6 font-manrope text-base text-[#1E293B] sm:text-sm md:text-base">
                    {description}
                </p>

                <ul className="flex flex-col gap-4 font-manrope text-sm text-gray-700 sm:text-base">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <img
                                src="/cargo/section4/check_icon.svg"
                                alt="check"
                                className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="pt-8 font-manrope text-xl font-semibold text-[#1E293B] sm:text-2xl">
                    {contactTitle}
                </p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <button className="font-regular flex w-full items-center justify-center rounded-full bg-[#00B9EC] px-4 py-2 text-xs text-white transition hover:bg-[#2E3135] hover:text-white sm:w-auto sm:px-5 sm:text-sm">
                        {getInTouchText}
                    </button>
                    <button className="font-regular flex w-full items-center justify-center rounded-full border border-black px-4 py-2 text-xs text-black transition hover:border-none hover:bg-[#2E3135] hover:text-white sm:w-auto sm:px-5 sm:text-sm">
                        {contactUsText} &nbsp;
                        <img
                            src="/cargo/herosection/right_arrow_color.svg"
                            alt="arrow"
                            className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section4;
