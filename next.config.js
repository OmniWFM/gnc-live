/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ideogram.ai' },
    ],
  },
};
module.exports = nextConfig;