import React from "react";
import { useTranslation } from "react-i18next";

const Section1: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="m-12 w-full overflow-hidden font-stan flex flex-col items-center justify-center h-[60vh]">
            <p>Loading Blog Data ...</p>
        </section>
    );
};

export default Section1;
