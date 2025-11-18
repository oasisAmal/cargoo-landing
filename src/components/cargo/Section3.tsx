import { useTranslation } from "react-i18next";

const Section3: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const text = {
        titleSmall: isArabic ? "خدماتنا" : "OUR SERVICES",
        titleLine1: isArabic ? "أسطول متنوع لـ" : "DIVERSE FLEET FOR",
        titleLine2: isArabic ? "كل احتياجات الشحن" : "EVERY FREIGHT NEED",
        learnMore: isArabic ? "اعرف المزيد" : "Learn More",

        service1: {
            num: "01",
            title: isArabic ? "سفن الحاويات" : "Container Ships",
            subtitle: isArabic
                ? "للشحن البحري العالمي"
                : "FOR GLOBAL SEA FREIGHT",
            desc: isArabic
                ? `مثالية للبضائع الكبيرة والتجارة لمسافات طويلة. يربط أسطولنا من سفن الحاويات الموانئ الرئيسية حول العالم، ونوفر حلول شحن بحري موثوقة وفعّالة من حيث التكلفة، مدعومة بتتبع لحظي ودعم كامل لإجراءات الجمارك.`
                : `Ideal for bulk goods and long-distance trade, our container 
ship network connects major ports worldwide. We provide 
reliable and cost-effective ocean freight solutions, backed by 
real-time tracking and full customs support.`,
        },

        service2: {
            num: "02",
            title: isArabic ? "الشاحنات الثقيلة" : "Heavy Trucks",
            subtitle: isArabic
                ? "للنقل البري الإقليمي والدولي"
                : "FOR REGIONAL AND LONG-DISTANCE LAND TRANSPORT",
            desc: isArabic
                ? `يضمن أسطولنا من الشاحنات الثقيلة عمليات تسليم سلسة داخل الدولة وعبر الحدود. نقدم خدمات الشحن الكامل (FTL) أو الجزئي (LTL)، ونتعامل مع مختلف أنواع البضائع الصناعية والتجارية بمرونة وسرعة عالية.`
                : `Our fleet of heavy-duty trucks ensures smooth domestic and 
cross-border deliveries. From full truckloads (FTL) to less-
than-truckload (LTL) options, we handle everything from 
industrial cargo to retail distribution with flexibility and speed.`,
        },

        service3: {
            num: "03",
            title: isArabic
                ? "فانات التبريد والتوصيل"
                : "Delivery Chiller Vans",
            subtitle: isArabic
                ? "لخدمة التوصيل السريع"
                : "FOR FAST, LAST-MILE SERVICE",
            desc: isArabic
                ? `السرعة والدقة عاملان أساسيان في المرحلة الأخيرة من التوصيل. توفر فانات التبريد لدينا نقلًا فعالًا وآمنًا للطرود الحساسة وسلع التجارة الإلكترونية والطلبات العاجلة حتى باب العميل.`
                : `Speed and precision matter in the final leg of delivery. Our 
agile delivery vans provide efficient last-mile transport, ideal 
for eCommerce, urban logistics, and time-sensitive packages
—right to your customer’s door.`,
        },

        service4: {
            num: "04",
            title: isArabic ? "دراجات التوصيل" : "Delivery Bike's",
            subtitle: isArabic
                ? "لتوصيل أسرع في المناطق الحضرية"
                : "SPEEDING YOUR PARCELS TO THE FINISH LINE",
            desc: isArabic
                ? `تعتمد خدمة التوصيل بالدراجات لدينا على السرعة والدقة، لتقديم خدمة توصيل فعّالة في المدن والمناطق المزدحمة. نضمن وصول الطرود الصغيرة والمتوسطة إلى وجهتها بسرعة وثبات—وفي الوقت المحدد دائمًا.`
                : `Precision and speed drive our last-mile service. With agile 
vans built for efficiency, we deliver your goods—on time, every 
time—to your customer’s door.`,
        },
    };

    return (
        <section className="clip-top-shape1 mt-28 w-full overflow-hidden bg-[#2E3135] pb-20 pt-28 font-stan">
            <div className="px-6 md:px-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                    <div className="text-center md:text-left">
                        <p
                            className={`mb-6 flex w-full items-center text-sm font-semibold text-white md:text-xl
    ${isArabic ? "text-right" : "flex-row text-left"}`}
                        >
                            <img
                                src="/cargo/herosection/right_arrow_color.svg"
                                className="h-4 w-4"
                                alt="arrow"
                            />
                            <span className="ml-2">{text.titleSmall}</span>
                        </p>

                        <p
                            className={`w-full text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl 
        ${isArabic ? "text-right" : "text-left"}`}
                        >
                            {text.titleLine1} <br /> {text.titleLine2}
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
                        {text.service1.num}
                    </p>
                </div>

                <div
                    className={`flex flex-col items-start justify-start space-y-3 ${isArabic ? "" : "sm:ml-[-140px]"} sm:text-center md:text-left`}
                >
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        {text.service1.title}
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        {text.service1.subtitle}
                    </p>
                    <p className="max-w-xl whitespace-pre-line pb-8 text-sm leading-relaxed text-white sm:text-base">
                        {text.service1.desc}
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        {text.learnMore} &nbsp;
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
                        {text.service2.num}
                    </p>
                </div>

                <div
                    className={`flex flex-col items-start justify-start space-y-3 ${isArabic ? "" : "sm:ml-[-140px]"} sm:text-center md:text-left`}
                >
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        {text.service2.title}
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        {text.service2.subtitle}
                    </p>
                    <p className="max-w-xl whitespace-pre-line pb-8 text-sm leading-relaxed text-white  sm:text-base">
                        {text.service2.desc}
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        {text.learnMore} &nbsp;
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
            <div className="mt-10 grid grid-cols-1 gap-8 bg-[#2E3135] px-6 py-20 md:grid-cols-3 md:gap-10 lg:px-12">
                <div className="flex items-start justify-start">
                    <p className="text-6xl font-bold text-[#00B9EC] sm:text-7xl">
                        {text.service3.num}
                    </p>
                </div>

                <div
                    className={`flex flex-col items-start justify-start space-y-3 ${isArabic ? "" : "sm:ml-[-140px]"} sm:text-center md:text-left`}
                >
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        {text.service3.title}
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        {text.service3.subtitle}
                    </p>
                    <p className="max-w-xl whitespace-pre-line pb-8 text-sm leading-relaxed text-white  sm:text-base">
                        {text.service3.desc}
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        {text.learnMore} &nbsp;
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
            <div className="mt-10 grid grid-cols-1 gap-8 bg-[#282A2C] px-6 py-20 md:grid-cols-3 md:gap-10 lg:px-12">
                <div className="flex items-start justify-start">
                    <p className="text-6xl font-bold text-[#00B9EC] sm:text-7xl">
                        {text.service4.num}
                    </p>
                </div>

                <div
                    className={`flex flex-col items-start justify-start space-y-3 ${isArabic ? "" : "sm:ml-[-140px]"} sm:text-center md:text-left`}
                >
                    <p className="text-2xl font-semibold text-white sm:text-3xl">
                        {text.service4.title}
                    </p>
                    <p className="pb-2 text-xs font-medium text-[#CBD5E1] sm:text-sm">
                        {text.service4.subtitle}
                    </p>
                    <p className="max-w-xl whitespace-pre-line pb-8 text-sm leading-relaxed text-white  sm:text-base">
                        {text.service4.desc}
                    </p>

                    <button className="mt-12 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:px-5 sm:text-sm">
                        {text.learnMore} &nbsp;
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
                        src="/cargo/section3/video4.mp4"
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
