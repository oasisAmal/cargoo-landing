import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import HeroSection from "../components/blog/HeroSection";
import Section1 from "../components/blog/Section1";
import Section2 from "../components/blog/Section2";
import Footer from "../components/blog/Footer";

export default function Blogs() {
    const { i18n } = useTranslation();
    const { id } = useParams<{ id?: string }>();

    const hasId = !!id;
    const direction = i18n.language === "ar" ? "rtl" : "ltr";

    return (
        <div dir={direction} className="relative overflow-y-scroll bg-white">
            <HeroSection blogId={id} />
            {hasId ? <Section1 blogId={id} /> : <Section2/>}

            <Footer />
        </div>
    );
}
