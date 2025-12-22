import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

interface HeroSectionProps {
    blogId?: string;
}

interface BlogHeroData {
    title: string;
    image: string;
    date: string;
}

const getLocalizedValue = (
    arr: any[] | undefined,
    langId: string,
    fallback = "",
) => {
    if (!Array.isArray(arr)) return fallback;
    const entry = arr.find((item) => item[langId]);
    return entry?.[langId] ?? fallback;
};

const HeroSection: React.FC<HeroSectionProps> = ({ blogId }) => {
    const { t } = useTranslation();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isArabic = i18n.language === "ar";
    const langId = isArabic ? "2" : "1";

    const [blog, setBlog] = useState<BlogHeroData | null>(null);

    useEffect(() => {
        if (!blogId) {
            setBlog(null);
            return;
        }

        const fetchBlogHero = async () => {
            try {
                const res = await fetch(
                    `https://admin.cargooapp.com/api/articles/show/${blogId}`,
                );
                const json = await res.json();

                const title = getLocalizedValue(
                    json?.named?.title,
                    langId,
                    json?.name,
                );

                setBlog({
                    title,
                    image: json.image,
                    date: json.createdAt
                        ? new Date(json.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          })
                        : "",
                });
            } catch (e) {
                console.error(e);
            }
        };

        fetchBlogHero();
    }, [blogId, langId]);

    const toggleServices = () => {
        setIsServicesOpen((prev) => {
            const newState = !prev;
            if (newState) setIsLanguagesOpen(false);
            return newState;
        });
    };

    const toggleLanguages = () => {
        setIsLanguagesOpen((prev) => {
            const newState = !prev;
            if (newState) setIsServicesOpen(false);
            return newState;
        });
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLanguagesOpen(false);
    };

    return (
        <section className="clip-bottom-shape scroll-y-hidden relative h-[calc(50vh+40px)] w-full overflow-hidden font-stan">
            <img
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={blog?.image || "/blog/banner.jpg"}
                alt="Hero Background"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute left-0 top-0 z-30 w-full px-4 py-4 md:px-14 md:py-6">
                <div className="flex items-center justify-between">
                    <img
                        src="/cargo/herosection/cargo_logo.svg"
                        alt="Cargo Logo"
                        className="h-8 w-auto sm:h-10 md:h-12"
                    />

                    <nav className="hidden flex-wrap items-center justify-center gap-4 rounded-full bg-black/20 px-8 py-2 text-xs text-white sm:text-sm md:flex md:gap-8 md:px-8">
                        <a
                            href="/"
                            className="font-manrope transition hover:text-[#00B9EC]"
                        >
                            {t("navbar.home")}
                        </a>

                        <div className="group relative">
                            <button
                                onClick={toggleServices}
                                className="flex items-center gap-1 font-manrope hover:text-[#00B9EC]"
                            >
                                {t("navbar.services")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        isServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isServicesOpen && (
                                <div className="absolute top-full z-50 mt-5 w-[350px] bg-white/20 px-2 py-5 backdrop-blur-md">
                                    <h3 className="mb-4 pl-4 text-base text-white">
                                        {t("navbar.all_services")}
                                    </h3>
                                    <ul className="relative space-y-3 text-[13px] text-gray-200">
                                        {Object.entries(
                                            t("services_list", {
                                                returnObjects: true,
                                            }),
                                        ).map(([key, value]) => (
                                            <li
                                                key={key}
                                                className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all hover:bg-[#00B9EC] hover:text-white"
                                            >
                                                <span>{value}</span>

                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    className="block h-4 w-4 hover:hidden"
                                                    alt="arrow"
                                                />

                                                <img
                                                    src="/cargo/herosection/right_arrow_white.svg"
                                                    className="hidden h-4 w-4 hover:block"
                                                    alt="arrow-white"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <a
                            href="/blogs"
                            className="font-manrope transition hover:text-[#00B9EC]"
                        >
                            {t("navbar.blogs")}
                        </a>

                        <div className="group relative">
                            <button
                                onClick={toggleLanguages}
                                className="flex items-center gap-1 font-manrope hover:text-[#00B9EC]"
                            >
                                {t("navbar.language")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        isLanguagesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isLanguagesOpen && (
                                <div className="absolute top-full z-50 mr-24 mt-3 w-[200px] bg-white/20 px-5 py-4 backdrop-blur-sm">
                                    <ul className="space-y-1 font-stan text-gray-200">
                                        <li
                                            onClick={() => changeLanguage("en")}
                                            className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white"
                                        >
                                            <span>
                                                {t("languages.english")}
                                            </span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>

                                        <li
                                            onClick={() => changeLanguage("ar")}
                                            className="group mx-4 flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out hover:bg-[#00B9EC] hover:text-white"
                                        >
                                            <span>{t("languages.arabic")}</span>
                                            <div className="relative h-4 w-4">
                                                <img
                                                    src="/cargo/herosection/right_arrow_color.svg"
                                                    alt="colored arrow"
                                                    className="absolute inset-0 block h-4 w-4 group-hover:hidden"
                                                />
                                                <img
                                                    src="/cargo/herosection/right_arrow.svg"
                                                    alt="arrow"
                                                    className="absolute inset-0 hidden h-4 w-4 group-hover:block"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                const target =
                                    document.getElementById("quote-section");
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="rounded-full bg-[#00B9EC] px-5 py-2 font-manrope text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-3"
                        >
                            {t("navbar.get_quote")}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="mt-4 flex flex-col gap-4 rounded-md bg-black/40 px-4 py-4 text-white backdrop-blur-md md:hidden">
                        <a
                            href="/"
                            className="font-manrope hover:text-[#00B9EC]"
                        >
                            {t("navbar.home")}
                        </a>
                        <button
                            onClick={toggleServices}
                            className="flex items-center justify-between font-manrope hover:text-[#00B9EC]"
                        >
                            {t("navbar.services")}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isServicesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isServicesOpen && (
                            <div className="ml-4 space-y-2">
                                {Object.entries(
                                    t("services_list", { returnObjects: true }),
                                ).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="hover:text-[#00B9EC]"
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        )}
                        <a
                            href="/"
                            className="font-manrope hover:text-[#00B9EC]"
                        >
                            {t("navbar.blogs")}
                        </a>
                        <button
                            onClick={toggleLanguages}
                            className="flex items-center justify-between font-manrope hover:text-[#00B9EC]"
                        >
                            {t("navbar.language")}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isLanguagesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isLanguagesOpen && (
                            <div className="ml-4 space-y-2 font-stan text-gray-200">
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                    onClick={() => changeLanguage("en")}
                                >
                                    {t("languages.english")}
                                </a>
                                <a
                                    href="/"
                                    className="block hover:text-[#00B9EC]"
                                    onClick={() => changeLanguage("ar")}
                                >
                                    {t("languages.arabic")}
                                </a>
                            </div>
                        )}

                        <button
                            onClick={() => {
                                const target =
                                    document.getElementById("quote-section");
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="mt-2 rounded-full bg-[#00B9EC] px-5 py-2 font-manrope text-white transition hover:bg-white hover:text-black"
                        >
                            {t("navbar.get_quote")}
                        </button>
                    </div>
                )}
            </div>

            {/* Center Hero Content */}
            <div className="absolute inset-0 z-20 flex items-center px-4 pt-20 font-stan text-white sm:px-14 sm:pt-0 md:mt-8">
                <div className="grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-3">
                    {/* Left Spacer */}
                    <div className="hidden sm:block" />

                    {/* Center Text */}
                    <div className="text-center">
                        <h1 className="mb-2 text-2xl font-semibold uppercase leading-tight sm:mb-4 sm:text-5xl">
                            Blog Page
                        </h1>
                        <p className="mx-auto max-w-xl text-xs uppercase tracking-wide text-gray-200 sm:text-lg">
                            <span className="text-[#00B9EC]">Home</span> / Blog
                            Page
                        </p>
                    </div>

                    {/* Right Icons */}
                    <div className="mt-6 flex items-center justify-center gap-3 sm:mt-0 sm:flex-col sm:items-end">
                        {/* App Store */}
                        <div className="border-1-white m-4 my-1 border bg-black/50 bg-transparent transition hover:border-[#00B9EC]">
                            <img
                                src="/cargo/appstore_logo.svg"
                                alt="App Store"
                                className="h-10 w-auto cursor-pointer p-2 backdrop-blur-md"
                            />
                        </div>

                        {/* Play Store */}
                        <div className="border-1-white m-4 my-1 border bg-black/50 bg-transparent transition hover:border-[#00B9EC]">
                            <img
                                src="/cargo/playstore_logo.svg"
                                alt="Play Store"
                                className="h-10 w-auto cursor-pointer p-2 backdrop-blur-md"
                            />
                        </div>

                        {/* WhatsApp */}
                        <div className="border-1-white m-4 my-1 transition">
                            <a
                                href="https://wa.me/97125630364"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <img
                                    src="/cargo/herosection/whatsapp_logo.svg"
                                    alt="Whatsapp"
                                    className="h-8 sm:h-11"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
