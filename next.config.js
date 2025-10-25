/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: Dikkat! Bu, build sırasında ESLint hatalarını yok sayar.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
