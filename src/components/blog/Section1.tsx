import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface Blog {
    id: number | string;
    date: string;
    title: string;
    img: string;
}
const Section1: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const currentLang = i18n.language;
    const isArabic = currentLang === "ar";
    const langId = isArabic ? "2" : "1";

    const dir = isArabic ? "rtl" : "ltr";

    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(
                    "https://admin.cargooapp.com/api/articles/list",
                );

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const json = await res.json();
                const apiData = json.data;

                const mappedBlogs: Blog[] = apiData
                    .slice(0, 4)
                    .map((item: any) => {
                        let localizedTitle = item.name ?? "Untitled Article";

                        if (Array.isArray(item?.named?.title)) {
                            const titleEntry = item.named.title.find(
                                (entry: any) => entry[langId],
                            );

                            if (titleEntry?.[langId]) {
                                localizedTitle = titleEntry[langId];
                            }
                        }

                        return {
                            id: item.id,
                            date: item.createdAt
                                ? new Date(item.createdAt).toLocaleDateString(
                                      "en-US",
                                      {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                      },
                                  )
                                : "Unknown Date",
                            title: localizedTitle,
                            img: item.image || "/cargo/section8/default.jpg",
                        };
                    });

                setBlogs(mappedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, [langId]);

    return (
        <section className="mb-12 flex w-full flex-col items-center justify-center overflow-hidden font-stan">
            {blogs.length > 0 && (
                <section
                    dir={isArabic ? "rtl" : "ltr"}
                    className="clip-top-shape w-full overflow-hidden pb-20 pt-28 font-stan"
                >
                    <div className="px-6 md:px-12">
                        <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                            <img
                                src="/cargo/herosection/right_arrow_color.svg"
                                alt="colored arrow"
                                className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
                            />
                            {t("latestNews").toUpperCase()}
                        </p>
                    </div>

                    <section className="mt-20 w-full px-6 md:px-12">
                        {isLoading ? (
                            <p className="text-center text-gray-600">
                                {t("loadingBlogs")}
                            </p>
                        ) : blogs.length === 0 ? (
                            <p className="text-center text-gray-600">
                                {t("noRecentArticles")}
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {blogs.map((blog) => (
                                    <Link
                                        key={blog.id}
                                        to={`/blogs/${blog.id}`}
                                        className="group block"
                                    >
                                        <div className="flex h-full cursor-pointer flex-col overflow-hidden border border-gray-200 bg-white transition-transform duration-300 group-hover:-translate-y-1">
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="h-48 w-full object-cover"
                                                style={{
                                                    clipPath:
                                                        "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
                                                }}
                                            />
                                            <div className="flex flex-1 flex-col justify-between p-4">
                                                <p className="text-sm font-semibold tracking-widest text-[#64748B]">
                                                    {blog.date.toUpperCase()}
                                                </p>

                                                <h2 className="mb-4 mt-2 text-lg font-bold leading-snug text-gray-900">
                                                    {blog.title}
                                                </h2>

                                                <div className="flex items-center gap-2 border-t border-gray-200 pt-3 text-base font-semibold text-[#64748B]">
                                                    {t("readMore")}
                                                    <img
                                                        src="/cargo/herosection/right_arrow_color.svg"
                                                        alt="arrow"
                                                        className="h-4 w-4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>
                </section>
            )}
        </section>
    );
};

export default Section1;
