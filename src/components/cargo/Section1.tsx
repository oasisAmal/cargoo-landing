import React from "react";
import { useTranslation } from "react-i18next";

const Section1: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-28 w-full overflow-hidden font-stan">
            {/* Header */}
            <p className="mb-4 flex w-full items-center justify-center gap-2 text-center text-xl font-bold text-[#64748B]">
                <img
                    src="/cargo/herosection/right_arrow_color.svg"
                    alt="colored arrow"
                    className="h-4 w-4"
                />
                {t("section1.header_arrow_label")}
            </p>

            <p className="mx-auto mb-4 max-w-4xl text-center text-4xl font-semibold sm:text-5xl">
                {t("section1.title_line1")}
                <br />
                {t("section1.title_line2")}
            </p>

            <p className="mb-24 w-full px-4 text-center font-sans text-gray-800 sm:px-20 lg:px-40">
                {t("section1.description1")}
                <br className="hidden sm:block" />
                {t("section1.description2")}
                <br className="hidden sm:block" />
                {t("section1.description3")}
            </p>

            <section
                className="relative mx-4 flex h-screen w-auto flex-col overflow-hidden sm:mx-12"
                style={{
                    clipPath:
                        "polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px)",
                }}
            >
                <img
                    src="/cargo/section1/section1_background.jpg"
                    alt="Logistics"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative flex h-full w-full">
                    <div className="relative ml-auto flex flex-col justify-center px-6 text-white sm:px-8 md:max-w-xl md:px-16">
                        <div className="absolute inset-0 m-3 bg-black/40 backdrop-blur-md"></div>

                        <div className="relative z-10 flex flex-col space-y-6">
                            <h2 className="font-stan text-2xl font-bold sm:text-3xl md:text-4xl">
                                {t("section1.sub_section_title_line1")}{" "}
                                <br className="hidden sm:block" />
                                {t("section1.sub_section_title_line2")}
                            </h2>

                            <button className="flex w-max items-center rounded-full border border-white px-5 py-2 text-sm font-semibold transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:text-base">
                                {t("section1.about_us_button")} &nbsp;
                                <img
                                    src="/cargo/herosection/right_arrow.svg"
                                    alt="arrow"
                                    className="h-4 w-4"
                                />
                            </button>

                            <span className="hidden py-2 sm:block"></span>

                            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
                                {/* Experience */}
                                <div className="">
                                    <h3 className="text-3xl font-bold sm:text-5xl">
                                        {t(
                                            "section1.stats.experience_years_number",
                                        )}
                                    </h3>
                                    <p className="mb-2 text-sm font-semibold sm:mb-4 sm:text-lg">
                                        {t(
                                            "section1.stats.experience_years_label",
                                        )}
                                    </p>
                                    <p className="max-w-xl text-xs sm:text-base">
                                        {t(
                                            "section1.stats.experience_years_description1",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.experience_years_description2",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.experience_years_description3",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.experience_years_description4",
                                        )}
                                    </p>
                                </div>

                                {/* Shipments */}
                                <div>
                                    <h3 className="text-3xl font-bold sm:text-5xl">
                                        {t("section1.stats.shipments_number")}
                                    </h3>
                                    <p className="mb-2 text-sm font-semibold sm:mb-4 sm:text-lg">
                                        {t("section1.stats.shipments_label")}
                                    </p>
                                    <p className="max-w-xs text-xs sm:text-base">
                                        {t(
                                            "section1.stats.shipments_description1",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.shipments_description2",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.shipments_description3",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.shipments_description4",
                                        )}
                                        <br className="hidden sm:block" />
                                        {t(
                                            "section1.stats.shipments_description5",
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Section1;
