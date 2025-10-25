/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Vercel build sırasında ESLint hatalarını yoksay
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
