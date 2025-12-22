import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
    blogId?: string;
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

const Section1: React.FC<HeroSectionProps> = ({ blogId }) => {
    const { i18n } = useTranslation();

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const isArabic = i18n.language === "ar";
    const langId = isArabic ? "2" : "1";

    useEffect(() => {
        if (!blogId) return;

        const fetchArticle = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://admin.cargooapp.com/api/articles/show/${blogId}`,
                );
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [blogId, langId]);

    if (loading) {
        return (
            <section className="flex h-[60vh] items-center justify-center">
                Loading Blog Data...
            </section>
        );
    }

    if (!data) return null;

    const articleTitle = getLocalizedValue(
        data?.named?.title,
        langId,
        data?.name,
    );

    return (
        <section className="mx-auto max-w-4xl px-6 py-12 font-stan">
            {/* Article Title */}
            <h1 className="mb-6 text-3xl font-bold text-gray-900">
                {articleTitle}
            </h1>

            {/* Hero Image */}
            {data.image && (
                <img
                    src={data.image}
                    alt={articleTitle}
                    className="mb-10 w-full rounded-lg object-cover"
                />
            )}

            {/* Paragraphs */}
            <div className="space-y-14">
                {data.ArticleParagraphs?.map((para: any) => {
                    const heading = getLocalizedValue(
                        para?.named?.title,
                        langId,
                        para?.name,
                    );

                    const content = getLocalizedValue(
                        para?.contentd?.title,
                        langId,
                        para?.content,
                    );

                    return (
                        <div key={para.id}>
                            {/* Paragraph Title */}
                            <h2 className="mb-4 text-xl font-bold text-gray-900">
                                {heading}
                            </h2>

                            {/* Paragraph Image */}
                            {para.image && (
                                <img
                                    src={para.image}
                                    alt={heading}
                                    className="mb-4 w-full rounded-md object-cover"
                                />
                            )}

                            {/* Paragraph Content */}
                            <p className="leading-relaxed text-gray-700">
                                {content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Section1;
