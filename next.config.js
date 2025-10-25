/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build sırasında ESLint hatalarını yok say
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
