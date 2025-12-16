import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cargo from "./routes/cargo";
import Blog from "./routes/blog";
import "./i18n";

// React Query client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Cargo />} />
                    <Route path="/home" element={<Cargo />} />
                    <Route path="/blogs" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);

reportWebVitals();
