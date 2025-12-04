// const Section8: React.FC = () => {
//     const blogs = [
//         {
//             date: "Nov 30, 2025",
//             title: "How We Ensure Safe & On-Time Freight",
//             img: "/cargo/section8/blog1.jpg",
//         },
//         {
//             date: "Nov 30, 2025",
//             title: "How We Ensure Safe & On-Time Freight",
//             img: "/cargo/section8/blog2.jpg",
//         },
//         {
//             date: "Nov 30, 2025",
//             title: "How We Ensure Safe & On-Time Freight",
//             img: "/cargo/section8/blog3.jpg",
//         },
//         {
//             date: "Nov 30, 2025",
//             title: "How We Ensure Safe & On-Time Freight",
//             img: "/cargo/section8/blog4.jpg",
//         },
//     ];
//     return (
//         <section className="clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28 font-stan">
//             <div className="px-6 md:px-12">
//                 <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
//                     <img
//                         src="/cargo/herosection/right_arrow_color.svg"
//                         alt="colored arrow"
//                         className="h-4 w-4"
//                     />
//                     LATEST NEWS
//                 </p>

//                 <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
//                     INSIGHTS FROM
//                     <br />
//                     THE FIELD
//                 </p>
//             </div>

//             <section className="mt-20 w-full px-6 font-stan md:px-12">
//                 <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                     {blogs.map((blog, i) => (
//                         <div
//                             key={i}
//                             className="flex flex-col overflow-hidden border border-gray-200 bg-white"
//                         >
//                             <img
//                                 src={blog.img}
//                                 alt={blog.title}
//                                 className="h-56 w-full object-cover p-2"
//                                 style={{
//                                     clipPath:
//                                         "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
//                                 }}
//                             />

//                             <div className="flex flex-col justify-between p-5">
//                                 <p className="text-sm font-semibold tracking-widest text-[#64748B]">
//                                     {blog.date.toUpperCase()}
//                                 </p>

//                                 <h2 className="mb-4 mt-2 text-lg font-bold leading-snug text-gray-900">
//                                     {blog.title}
//                                 </h2>

//                                 <div className="flex items-center gap-2 border-t border-gray-200 pt-3 text-base font-semibold text-[#64748B]">
//                                     Read More
//                                     <img
//                                         src="/cargo/herosection/right_arrow_color.svg"
//                                         alt="arrow"
//                                         className="h-4 w-4 text-[#00B9EC]"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default Section8;

// import React, { useEffect, useState } from "react";

// interface Blog {
//     date: string;
//     title: string;
//     img: string;
// }

// const Section8: React.FC = () => {
//     const [blogs, setBlogs] = useState<Blog[]>([]);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const res = await fetch("https://admin.cargooapp.com/api/articles/list");
//                 const data = await res.json();
//                 setBlogs(data);
//             } catch (error) {
//                 console.error("Error fetching blogs:", error);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     return (
//         <section className="clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28 font-stan">
//             {/* SAME UI ↓ */}
//             <div className="px-6 md:px-12">
//                 <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
//                     <img
//                         src="/cargo/herosection/right_arrow_color.svg"
//                         alt="colored arrow"
//                         className="h-4 w-4"
//                     />
//                     LATEST NEWS
//                 </p>

//                 <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
//                     INSIGHTS FROM
//                     <br />
//                     THE FIELD
//                 </p>
//             </div>

//             <section className="mt-20 w-full px-6 md:px-12">
//                 {blogs.length === 0 ? (
//                     <p className="text-center text-gray-600">Loading blogs...</p>
//                 ) : (
//                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {blogs.map((blog, i) => (
//                             <div
//                                 key={i}
//                                 className="flex flex-col overflow-hidden border border-gray-200 bg-white"
//                             >
//                                 <img
//                                     src={blog.img}
//                                     alt={blog.title}
//                                     className="h-56 w-full object-cover p-2"
//                                     style={{
//                                         clipPath:
//                                             "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
//                                     }}
//                                 />

//                                 <div className="flex flex-col justify-between p-5">
//                                     <p className="text-sm font-semibold tracking-widest text-[#64748B]">
//                                         {blog.date.toUpperCase()}
//                                     </p>

//                                     <h2 className="mb-4 mt-2 text-lg font-bold leading-snug text-gray-900">
//                                         {blog.title}
//                                     </h2>

//                                     <div className="flex items-center gap-2 border-t border-gray-200 pt-3 text-base font-semibold text-[#64748B]">
//                                         Read More
//                                         <img
//                                             src="/cargo/herosection/right_arrow_color.svg"
//                                             alt="arrow"
//                                             className="h-4 w-4 text-[#00B9EC]"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </section>
//         </section>
//     );
// };

// export default Section8;

// import React, { useEffect, useState } from "react";

// // 1. Interface for a single blog/article card in the component
// interface Blog {
//     date: string;
//     title: string;
//     img: string;
// }

// // 2. Interface for the overall API response structure for clarity
// interface ApiResponse {
//     code: number;
//     message: string;
//     data: {
//         name: string;
//         named: { title: { [key: string]: string }[] };
//         id: number;
//         image: string; // Used for the image
//         createdAt: string; // Used for the date
//         // Note: The sample API response provides a single object, but your UI is a list.
//         // I will assume the actual list endpoint returns an array of objects structured
//         // like the top-level 'data' object in your sample, OR that we use 'ArticleParagraphs'.
//         // Based on the UI needing a LIST of cards, I will assume the list endpoint
//         // returns an array of objects that map like this:
//         // { createdAt, name, image, ... }
//         // The API you used before was /api/articles/list which should return an array.
//         // I will map:
//         //  - createdAt -> date
//         //  - name -> title
//         //  - image -> img
//     }[]; // Assuming the actual list endpoint returns an array of these objects
// }

// const Section8: React.FC = () => {
//     const [blogs, setBlogs] = useState<Blog[]>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             setIsLoading(true);
//             try {
//                 // Adjust the URL if needed, based on the endpoint that returns a LIST of articles
//                 const res = await fetch("https://admin.cargooapp.com/api/articles/list");

//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }

//                 // Assuming the list endpoint returns a structure like the original component was fetching
//                 // where the data is the raw array of articles:
//                 const apiData: any[] = await res.json();

//                 // Map the API fields (createdAt, name, image) to the component's expected fields (date, title, img)
//                 const mappedBlogs: Blog[] = apiData.slice(0, 4).map((item) => ({
//                     // Format date: "2025-11-28T06:12:43.050Z" -> "Nov 28, 2025"
//                     date: item.createdAt
//                         ? new Date(item.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
//                         : "Unknown Date",
//                     title: item.name || "Untitled Article",
//                     img: item.image || "/cargo/section8/default.jpg",
//                 }));

//                 setBlogs(mappedBlogs);

//             } catch (error) {
//                 console.error("Error fetching blogs:", error);
//                 // In case of an error, we can still show a loading message or an error message
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     return (
//         <section className="clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28 font-stan">
//             {/* Header Section (CSS and layout unchanged) */}
//             <div className="px-6 md:px-12">
//                 <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
//                     <img
//                         src="/cargo/herosection/right_arrow_color.svg"
//                         alt="colored arrow"
//                         className="h-4 w-4"
//                     />
//                     LATEST NEWS
//                 </p>

//                 <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
//                     INSIGHTS FROM
//                     <br />
//                     THE FIELD
//                 </p>
//             </div>

//             {/* Blog Cards Section (CSS and layout unchanged) */}
//             <section className="mt-20 w-full px-6 font-stan md:px-12">
//                 {isLoading ? (
//                     <p className="text-center text-gray-600">Loading blogs...</p>
//                 ) : blogs.length === 0 ? (
//                     <p className="text-center text-gray-600">No recent articles found.</p>
//                 ) : (
//                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {blogs.map((blog, i) => (
//                             <div
//                                 key={i}
//                                 className="flex flex-col overflow-hidden border border-gray-200 bg-white"
//                             >
//                                 <img
//                                     src={blog.img}
//                                     alt={blog.title}
//                                     className="h-56 w-full object-cover p-2"
//                                     style={{
//                                         clipPath:
//                                             "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
//                                     }}
//                                 />

//                                 <div className="flex flex-col justify-between p-5">
//                                     <p className="text-sm font-semibold tracking-widest text-[#64748B]">
//                                         {/* Display date in uppercase, as per the original code */}
//                                         {blog.date.toUpperCase()}
//                                     </p>

//                                     <h2 className="mb-4 mt-2 text-lg font-bold leading-snug text-gray-900">
//                                         {blog.title}
//                                     </h2>

//                                     <div className="flex items-center gap-2 border-t border-gray-200 pt-3 text-base font-semibold text-[#64748B]">
//                                         Read More
//                                         <img
//                                             src="/cargo/herosection/right_arrow_color.svg"
//                                             alt="arrow"
//                                             className="h-4 w-4 text-[#00B9EC]"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </section>
//         </section>
//     );
// };

// export default Section8;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // <-- Import useTranslation

interface Blog {
    date: string;
    title: string;
    img: string;
}

const Section8: React.FC = () => {
    // 1. Initialize translation hook
    const { t, i18n } = useTranslation();

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get current language and derived properties
    const currentLang = i18n.language;
    const isArabic = currentLang === "ar";
    // Map Arabic ('ar') to ID '2', and use default '1' otherwise (based on your API sample)
    const langId = isArabic ? "2" : "1";

    // Set text direction
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

                // Assuming the list endpoint returns an array of article objects
                const apiData: any[] = await res.json();

                const mappedBlogs: Blog[] = apiData.slice(0, 4).map((item) => {
                    // --- Dynamic Title Localization Logic ---
                    let localizedTitle = item.name || "Untitled Article"; // Fallback to default 'name'

                    if (
                        item.named &&
                        item.named.title &&
                        Array.isArray(item.named.title)
                    ) {
                        // Find the object matching the required language ID
                        const titleEntry = item.named.title.find(
                            (entry: any) => entry[langId],
                        );

                        if (titleEntry) {
                            localizedTitle = titleEntry[langId];
                        }
                    }
                    // --- ------------------------------- ---

                    return {
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
                        title: localizedTitle, // Use the localized title
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

        // Re-run useEffect when the language changes
        fetchBlogs();
    }, [langId, i18n.language]);

    return (
        // 2. Add dir attribute for RTL support
        <section
            dir={isArabic ? "rtl" : "ltr"}
            className="clip-top-shape mt-28 w-full overflow-hidden bg-[#F2F2F2] pb-20 pt-28 font-stan"
        >
            {/* --- Header Section --- */}
            <div className="px-6 md:px-12">
                <p className="mb-6 flex w-full items-center justify-start gap-2 text-xl font-bold text-[#64748B]">
                    <img
                        src="/cargo/herosection/right_arrow_color.svg"
                        alt="colored arrow"
                        // Rotate arrow for Arabic
                        className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
                    />
                    {/* 3. Localize Static Text (use t('key')) */}
                    {t("latestNews").toUpperCase()}
                </p>

                {/* <p className="mb-8 flex w-full flex-col text-left text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl"> */}
                <p
                    className={`mb-6 flex w-full items-center gap-2 text-3xl font-bold sm:text-4xl md:text-5xl ${isArabic ? "flex-row-reverse justify-end" : "justify-start"}`}
                >
                    {/* Use dangerouslySetInnerHTML or t() for multi-line headers */}
                    <span
                        dangerouslySetInnerHTML={{
                            __html: t("insightsFromTheFieldTitle"),
                        }}
                    />
                </p>
            </div>

            {/* --- Blog Cards Section --- */}
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
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {blogs.map((blog, i) => (
                            <div
                                key={i}
                                className="flex flex-col overflow-hidden border border-gray-200 bg-white"
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="h-56 w-full object-cover p-2"
                                    style={{
                                        clipPath:
                                            "polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%)",
                                    }}
                                />

                                <div className="flex flex-col justify-between p-5">
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
                                            className="h-4 w-4 text-[#00B9EC]"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </section>
    );
};

export default Section8;
