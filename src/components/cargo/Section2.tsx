import { useTranslation } from "react-i18next";

const Section2: React.FC = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: "/cargo/section2/section2_icon1.svg",
            title: t("section2.cards.internationalShipping.title"),
            desc: t("section2.cards.internationalShipping.desc"),
        },
        {
            icon: "/cargo/section2/section2_icon2.svg",
            title: t("section2.cards.domesticDelivery.title"),
            desc: t("section2.cards.domesticDelivery.desc"),
        },
        {
            icon: "/cargo/section2/section2_icon3.svg",
            title: t("section2.cards.seaFreight.title"),
            desc: t("section2.cards.seaFreight.desc"),
        },
        {
            icon: "/cargo/section2/section2_icon4.svg",
            title: t("section2.cards.customsClearance.title"),
            desc: t("section2.cards.customsClearance.desc"),
        },
    ];

    return (
        <section className="font-stan clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28">
            {/* Section Header */}
            <div className="px-6 md:px-12">
                <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        className="h-4 w-4"
                    />
                    {t("section2.header")}
                </p>

                <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                    {t("section2.titleLine1")}
                    <br />
                    {t("section2.titleLine2")}
                </p>
            </div>

            {/* Cards Section */}
            <section className="px-6 py-10 md:px-12 md:py-16">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-8 sm:p-10 lg:p-12"
                            style={{
                                clipPath:
                                    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                            }}
                        >
                            <img
                                src={card.icon}
                                alt={card.title}
                                className="h-12 w-12 sm:h-14 sm:w-14"
                            />
                            <div className="mt-4 text-left">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Section2;
