import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <footer className="footer relative overflow-hidden bg-[#2C2F33] py-10 font-stan text-gray-300 sm:mt-[-2rem] md:px-20 md:pt-16">
            {/* --- Logo --- */}
            <div
                className={`mb-10 flex w-full items-center justify-center md:items-center md:justify-start ${isArabic ? "flex-row-reverse" : ""}`}
            >
                <img
                    src="/cargo/herosection/cargo_logo.svg"
                    alt="CARGO Logo"
                    className="mb-4 h-12 sm:h-14 md:h-16"
                />
            </div>

            {/* --- Main Grid --- */}
            <div
                className={`container grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start md:gap-16 md:pr-80 ${isArabic ? "text-right" : "text-left"}`}
            >
                {/* Left Section - Store Logos */}
                <div
                    className={`flex flex-col items-center ${isArabic ? "md:items-end" : "md:items-start"} text-center`}
                >
                    <div
                        className={`flex flex-wrap justify-center ${isArabic ? "md:justify-end" : "md:justify-start"} gap-4`}
                    >
                        <img
                            src="/cargo/appstore_logo.svg"
                            alt="App Store"
                            className="h-10 w-auto cursor-pointer border border-white/50 p-2 backdrop-blur transition hover:border-white sm:h-12"
                        />
                        <img
                            src="/cargo/playstore_logo.svg"
                            alt="Play Store"
                            className="h-10 w-auto cursor-pointer border border-white/50 p-2 backdrop-blur transition hover:border-white sm:h-12"
                        />
                    </div>
                </div>

                {/* Middle Section - About */}
                <div
                    className={`flex flex-col items-center ${isArabic ? "md:items-end" : "md:items-start"} text-center font-manrope`}
                >
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                        {isArabic ? "من نحن" : "About US"}
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>
                            <a href="#" className="hover:text-white">
                                {isArabic ? "خدماتنا" : "Our Services"}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                {isArabic ? "المدونة" : "Blog"}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                {isArabic ? "اتصل بنا" : "Contact Us"}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section - Contact */}
                <div
                    className={`flex flex-col items-center ${isArabic ? "md:items-end" : "md:items-start"} text-center font-manrope`}
                >
                    <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                        {isArabic ? "بيانات الاتصال" : "Contact Details"}
                    </h3>
                    <p
                        className={`text-sm leading-relaxed sm:text-left ${isArabic ? "text-right" : ""}`}
                    >
                        {isArabic
                            ? "مدينة أبوظبي – شارع السلام “برج الفردوس”"
                            : "Abu Dhabi City – Al Salam Street “Al Firdous Tower”"}
                        <br />
                        {isArabic
                            ? "أبوظبي، الإمارات العربية المتحدة"
                            : "Abu Dhabi, UAE"}
                    </p>
                    <p className="mt-3 text-sm sm:text-base">+971 2 673 3346</p>
                    <p className="mt-1 text-sm sm:text-base">info@3CARGO.com</p>
                </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-600"></div>

            {/* Bottom text */}
            <div
                className={`space-x-2 text-center text-sm text-gray-400 sm:text-base ${isArabic ? "flex flex-col items-center gap-1 md:flex-row md:justify-center" : ""}`}
            >
                <span className="cursor-pointer hover:text-white">
                    {isArabic ? "حقوق النشر" : "Imprint"}
                </span>
                <span>|</span>
                <span className="cursor-pointer hover:text-white">
                    {isArabic ? "سياسة الخصوصية" : "Privacy policy"}
                </span>
            </div>

            {/* Background watermark */}
            <img
                src="/cargo/section3/map_pin.svg"
                alt="Background shape"
                className="absolute bottom-[-250px] right-[-200px] w-[250px] opacity-30 sm:w-[350px] md:w-[500px] md:opacity-100 lg:w-[700px]"
            />
        </footer>
    );
};

export default Footer;
