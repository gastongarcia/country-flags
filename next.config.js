/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "restcountries.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
