
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "frame-src https://*.daily.co",
      "connect-src 'self' https://*.daily.co wss://*.daily.co",
      "script-src 'self' https://unpkg.com 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "media-src 'self' data: blob: https:",
      "worker-src 'self' blob:"
    ].join("; ");
    return [{ source: "/(.*)", headers: [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
    ] }];
  },
  async redirects(){ return [{ source:"/", destination:"/login", permanent:false }] }
};
module.exports = nextConfig;
