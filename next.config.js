/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["localhost"] },
  env: {
    APP_URL: process.env.APP_URL,
  },
};

module.exports = nextConfig;
