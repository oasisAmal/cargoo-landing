// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://admin.cargooapp.com",
            changeOrigin: true,
            secure: false,
        }),
    );
};
