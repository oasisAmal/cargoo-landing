import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

interface Section11Props {
    isArabic?: boolean;
}

const Section11: React.FC<Section11Props> = ({}) => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
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
                    alert(
                        isArabic
                            ? "تم إرسال الطلب بنجاح!"
                            : "Quote request sent successfully!",
                    );
                    formRef.current?.reset();
                },
                (error) => {
                    alert(
                        isArabic
                            ? "فشل الإرسال. حاول مرة أخرى."
                            : "Failed to send. Please try again.",
                    );
                    console.error(error);
                },
            );
    };

    return (
        <section
            className={`relative flex h-auto min-h-[600px] w-full flex-col overflow-hidden font-stan md:h-[600px] md:flex-row ${isArabic ? "direction-rtl" : ""}`}
            id="quote-section"
        >
            <img
                src="/cargo/section11/section11_background.png"
                alt="Logistics"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="z-2 relative flex h-full w-full flex-col md:flex-row">
                {/* Left Side: Info */}
                <div
                    className={`flex w-full flex-col justify-center px-6 py-12 text-white md:w-2/3 md:px-16 md:py-20 
    ${isArabic ? "items-end text-right" : "items-start text-left"}`}
                >
                    {/* Arrow + Title */}
                    <p
                        className={`mb-4 flex w-full items-center gap-2 text-lg font-bold text-white sm:text-xl 
      ${isArabic ? "flex-row-reverse justify-end" : "flex-row justify-start"}`}
                    >
                        <img
                            src="/cargo/herosection/right_arrow_color.svg"
                            alt="colored arrow"
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${isArabic ? "rotate-180" : ""}`}
                        />
                        {isArabic ? "الأسئلة الشائعة" : "FAQ"}
                    </p>

                    {/* Main Heading */}
                    <p
                        className={`mb-6 max-w-3xl text-3xl font-semibold sm:text-4xl md:text-5xl 
    ${isArabic ? "text-right" : "text-left"}`}
                    >
                        {isArabic ? "أسطول متنوع لـ" : "DIVERSE FLEET FOR"}
                        <br />
                        {isArabic ? "كل احتياجات الشحن" : "EVERY FREIGHT NEED"}
                    </p>

                    {/* Button */}
                    <div
                        className={`flex w-full ${isArabic ? "justify-end" : "justify-start"}`}
                    >
                        <button className="mt-6 flex w-max items-center rounded-full border border-white px-4 py-2 text-xs font-semibold text-white transition hover:border-none hover:bg-[#00B9EC] hover:text-white sm:mt-10 sm:px-5 sm:text-sm md:mt-12">
                            {isArabic ? "اعرف المزيد" : "Learn More"} &nbsp;
                            <img
                                src="/cargo/herosection/right_arrow.svg"
                                alt="arrow"
                                className={`h-3 w-3 sm:h-4 sm:w-4 ${isArabic ? "rotate-180" : ""}`}
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
                        className={`relative z-10 w-full max-w-md space-y-4 px-6 py-10 text-white sm:px-10 sm:py-12 md:px-6 md:py-12 ${isArabic ? "text-right" : "text-left"}`}
                    >
                        <h1 className="mb-4 font-stan text-3xl font-bold sm:text-4xl md:text-5xl">
                            {isArabic ? "اطلب عرض سعر" : "Get a Quote"}
                        </h1>
                        <p className="mb-6 text-sm sm:text-base">
                            {isArabic
                                ? "أخبرنا عن شحنتك واحصل على عرض سعر مخصص."
                                : "Tell us about your shipment and receive a personalized quote."}
                        </p>

                        <input
                            type="text"
                            name="user_name"
                            placeholder={isArabic ? "الاسم" : "Your Name"}
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder={
                                isArabic ? "البريد الإلكتروني" : "Your Email"
                            }
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <input
                            type="tel"
                            name="user_phone"
                            placeholder={
                                isArabic ? "رقم الهاتف" : "Your Number"
                            }
                            required
                            className="w-full border border-white bg-transparent px-4 py-2 text-sm text-white placeholder-gray-200 sm:text-base"
                        />
                        <textarea
                            name="message"
                            placeholder={isArabic ? "رسالتك" : "Your Message"}
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
                            {isArabic ? "إرسال الطلب" : "GET A QUOTE"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Section11;
