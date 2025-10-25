/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during build on Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
